package com.collegemates.services.impl;

import java.util.*;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import com.collegemates.entities.Category;
import com.collegemates.entities.Post;
import com.collegemates.entities.User;
import com.collegemates.exceptions.ResourceNotFoundException;
import com.collegemates.payloads.*;
import com.collegemates.repositories.CategoryRepo;
import com.collegemates.repositories.PostRepo;
import com.collegemates.repositories.UserRepo;
import com.collegemates.services.PostService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;


@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepo postRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private CategoryRepo categoryRepo;

    //not in use
    @Override
    public PostDto2 createPost(PostDto2 postDto, Integer userId) {
        User user = this.userRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "Id ", userId));
        Post post = this.modelMapper.map(postDto, Post.class);
        List<Category> c1 = new ArrayList<>();
        System.out.println("**************"+postDto.getCategories().toString());
        for (CategoryDto2 c : postDto.getCategories()) {
            System.out.println("############"+c.toString());
            Category category = this.categoryRepo.findById(c.getCategoryId()).orElseThrow(() -> new ResourceNotFoundException("Category", "Id ", c.getCategoryId()));
           // Category category1 = this.modelMapper.map(category, Category.class);
            c1.add(category);
        }

        System.out.println("%%%%%%%%%%%%%%%%"+ Collections.singletonList(c1.toString()));

       // post.setCategories(c1);
        post.setImageName("default.png");
        post.setAddedDate(new Date());
        post.setUser(user);

        Post newPost = this.postRepo.save(post);

        return this.modelMapper.map(newPost, PostDto2.class);
    }

    @Override
    public PostCreatedDto createPost2(PostDto postDto, Integer userId, Integer catId) {

        User user = this.userRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "Id ", userId));
        Category category = this.categoryRepo.findById(catId).orElseThrow(() -> new ResourceNotFoundException("Category", "Id ", catId));

        Post post = this.modelMapper.map(postDto, Post.class);
        post.setUser(user);
        post.setCategory(category);
        post.setAddedDate(new Date());
        Post newPost = this.postRepo.save(post);

        return this.modelMapper.map(newPost, PostCreatedDto.class);
    }


    @Override
    public PostDto2 updatePost(PostDto3 postDto, Integer postId) {
        Post post = this.postRepo.findById(postId) .orElseThrow(() -> new ResourceNotFoundException("Post ", "id", postId));
        List<Category> c1 = new ArrayList<>();
//        for (CategoryDto2 c : postDto.getCategories()) {
//            Category category = this.categoryRepo.findById(c.getCategoryId()).orElseThrow(() -> new ResourceNotFoundException("Category", "Id ", c.getCategoryId()));
//            // Category category1 = this.modelMapper.map(category, Category.class);
//            c1.add(category);
//        }

        //c1.addAll(post.getCategories());

        post.setTitle(postDto.getTitle());
        post.setContent(postDto.getContent());
        post.setImageName(postDto.getImageName());

       // post.setCategories(c1);
        Post updatedPost = this.postRepo.save(post);
        return this.modelMapper.map(updatedPost, PostDto2.class);
    }

    @Override
    public void deletePost(Integer postId) {
        Post post = this.postRepo.findById(postId)
                .orElseThrow(() -> new ResourceNotFoundException("Post ", "id", postId));
        this.postRepo.delete(post);

    }

    @Override
    public PostResponse getAllPost(Integer pageNumber, Integer pageSize, String sortBy, String sortDir) {

        Sort sort = null;
        if (sortDir.equalsIgnoreCase("desc")) {
            sort = Sort.by(sortBy).ascending();
        } else {
            sort = Sort.by(sortBy).descending();
        }

        Pageable p = PageRequest.of(pageNumber, pageSize, sort);
        Page<Post> pagePost = this.postRepo.findAll(p);
        List<Post> allPosts = pagePost.getContent();

        // List<Post> allPosts = this.postRepo.findAll();
        List<PostDto3> postDtos = allPosts.stream().map((post) -> this.modelMapper.map(post, PostDto3.class))
                .collect(Collectors.toList());

        PostResponse postResponse = new PostResponse();
        postResponse.setContent(postDtos);
        postResponse.setPageNumber(pagePost.getNumber());
        postResponse.setPageSize(pagePost.getSize());
        postResponse.setTotalElements(pagePost.getTotalElements());
        postResponse.setTotalPages(pagePost.getTotalPages());
        postResponse.setLastPage(pagePost.isLast());
        return postResponse;
    }

    @Override
    public PostDto3 getPostById(Integer postId) {
        Post post = this.postRepo.findById(postId)   .orElseThrow(() -> new ResourceNotFoundException("Post", "Id ", postId));
        return this.modelMapper.map(post, PostDto3.class);
    }

    @Override
    public List<PostDto> getPostsByCategory(Integer categoryId) {
        Category category = this.categoryRepo.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category", "Id ", categoryId));

//		List<Post> posts = this.postRepo.findByCategory(category);
//
//		List<PostDto> postsDto = posts.stream().map((post) -> this.modelMapper.map(post, PostDto.class))
//				.collect(Collectors.toList());

        return null;
    }

    @Override
    public List<PostDto> getPostsByUser(Integer userId) {
        User user = this.userRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "Id ", userId));

        List<Post> posts = this.postRepo.findByUser(user);

        List<PostDto> postsDto = posts.stream().map((post) -> this.modelMapper.map(post, PostDto.class))
                .collect(Collectors.toList());

        return postsDto;
    }

    @Override
    public List<PostDto> searchPosts(String keyword) {
        List<Post> posts = this.postRepo.findByTitleContaining(keyword);
        List<PostDto> postsDto = posts.stream().map((post) -> this.modelMapper.map(post, PostDto.class))
                .collect(Collectors.toList());
        return postsDto;
    }

}
