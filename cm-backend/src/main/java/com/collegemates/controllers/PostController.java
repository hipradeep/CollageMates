package com.collegemates.controllers;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.collegemates.config.AppConstants;
import com.collegemates.payloads.*;
import com.collegemates.services.FileService;
import com.collegemates.services.PostService;
import org.hibernate.engine.jdbc.StreamUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;



@RestController
@RequestMapping("/api")
public class PostController {

	@Autowired
	private PostService postService;
	@Autowired
	private FileService fileService;

	@Value("${project.image}")
	private String path;

	// create post
	@PostMapping("/user/{userId}/postss")
	public ResponseEntity<PostDto2> createPost(@RequestBody PostDto2 postDto, @PathVariable Integer userId) {

		PostDto2 createPostDto = this.postService.createPost(postDto, userId);

		return new ResponseEntity<PostDto2>(createPostDto, HttpStatus.CREATED);

	}

	// get post by user
	@GetMapping("/user/{userId}/posts")
	public ResponseEntity<List<PostDto>> getPostsByUser(@PathVariable Integer userId) {
		List<PostDto> posts = this.postService.getPostsByUser(userId);
		return new ResponseEntity<List<PostDto>>(posts, HttpStatus.OK);

	}

	// get post by category
	@GetMapping("/category/{categoryId}/posts")
	public ResponseEntity<List<PostDto>> getPostsByCategory(@PathVariable Integer categoryId) {
		List<PostDto> posts = this.postService.getPostsByCategory(categoryId);
		return new ResponseEntity<List<PostDto>>(posts, HttpStatus.OK);

	}

	// get all post
	@GetMapping("/posts")
	public ResponseEntity<ApiResponse> getAllPost(
			@RequestParam(value = "pageNumber", defaultValue = AppConstants.PAGE_NUMBER, required = false) Integer pageNumber,
			@RequestParam(value = "pageSize", defaultValue = AppConstants.PAGE_SIZE, required = false) Integer pageSize,
			@RequestParam(value = "sortBy", defaultValue = AppConstants.SORT_BY, required = false) String postId,
			@RequestParam(value = "sortDir", defaultValue = AppConstants.SORT_DIR, required = false) String sortDir) {

		PostResponse posts = this.postService.getAllPost(pageNumber, pageSize, postId, sortDir);


		return new ResponseEntity<>(new ApiResponse<>("Successfully!", true, posts), HttpStatus.OK);

	}

	// get post by post id
	@GetMapping("/posts/{postId}")
	public ResponseEntity<ApiResponse> getPostbyId(@PathVariable Integer postId) {
		PostDto3 postDto = this.postService.getPostById(postId);

		return new ResponseEntity<>(new ApiResponse<>("Successfully!", true, postDto), HttpStatus.OK);

	}

	// delete post
	@DeleteMapping("/posts/{postId}")
	public ResponseEntity<ApiResponse> deletePostById(@PathVariable Integer postId) {
		this.postService.deletePost(postId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("User deleted Successfully!", true), HttpStatus.OK);
	}

	// update post
	@PutMapping("/posts/{postId}")
	public ResponseEntity<PostDto2> updatePost(@RequestBody PostDto3 postDto, @PathVariable Integer postId) {
		System.out.println("**************"+postDto.toString());
		PostDto2 updatedPost = this.postService.updatePost(postDto, postId);

		return new ResponseEntity<PostDto2>(updatedPost, HttpStatus.OK);
	}

	// search post
	@GetMapping("/posts/search/{keyword}")
	public ResponseEntity<List<PostDto>> searchPostByTitle(@PathVariable String keyword) {

		List<PostDto> postsDtos = this.postService.searchPosts(keyword);

		return new ResponseEntity<List<PostDto>>(postsDtos, HttpStatus.OK);
	}


	// post image upload
	@PostMapping("/post/image/upload/{postId}")
	public ResponseEntity<PostDto2> uploadPostImage(@RequestParam("image") MultipartFile image,
			@PathVariable Integer postId) throws IOException {
		PostDto3 postDto = this.postService.getPostById(postId);

		String fileName = this.fileService.uploadImage(path, image);

		postDto.setImageName(fileName);

		PostDto2 updatedPost = this.postService.updatePost(postDto, postId);
		return new ResponseEntity<PostDto2>(updatedPost, HttpStatus.OK);
	}

	// post image upload
	@PostMapping("/user/{userId}/posts")
	public ResponseEntity<ApiResponse> createPost(
			@RequestParam("title") String title,
			@RequestParam("desc") String desc,
			@RequestParam("category") int catId,
			@RequestParam("image") MultipartFile image,
			@PathVariable Integer userId) throws IOException {

		PostDto postDto = new PostDto( );

		postDto.setTitle(title);
		postDto.setContent(desc);
		//String fileName="default.png";
		String fileName="";
		if(!image.isEmpty()){
			fileName = this.fileService.uploadImage(path, image);
		}
		postDto.setImageName(fileName);

		PostCreatedDto created = this.postService.createPost2(postDto, userId, catId);

		return	new ResponseEntity<>(new ApiResponse<>("Successfully!", true, created), HttpStatus.OK);
	}

	// method to serve files
	@GetMapping(value = "post/image/{imageName}", produces = MediaType.IMAGE_JPEG_VALUE)
	public void downloadImage(@PathVariable("imageName") String imageName, HttpServletResponse response)
			throws IOException {
		InputStream resource = this.fileService.getResource(path, imageName);
		response.setContentType(MediaType.IMAGE_JPEG_VALUE);
		StreamUtils.copy(resource, response.getOutputStream());
	}


}
