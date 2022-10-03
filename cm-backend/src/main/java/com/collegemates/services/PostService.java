package com.collegemates.services;



import com.collegemates.payloads.*;

import java.util.List;

public interface PostService {
	// create
	PostDto2 createPost(PostDto2 postDto, Integer userId);
	PostCreatedDto createPost2(PostDto postDto, Integer userI, Integer catID);


	// update
	PostDto2 updatePost(PostDto3 postDto, Integer postId);

	// delete
	void deletePost(Integer postId);

	// get all posts
	PostResponse getAllPost(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);

	// get single post
	PostDto3 getPostById(Integer postId);

	// get all posts by category
	List<PostDto> getPostsByCategory(Integer categoryId);

	// get all posts by user
	List<PostDto> getPostsByUser(Integer userId);

	// search posts
	List<PostDto> searchPosts(String keyword);
}
