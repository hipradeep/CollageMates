package com.collegemates.services;



import com.collegemates.payloads.PostDto;
import com.collegemates.payloads.PostDto2;
import com.collegemates.payloads.PostResponse;

import java.util.List;

public interface PostService {
	// create
	PostDto2 createPost(PostDto2 postDto, Integer userId);

	// update
	PostDto2 updatePost(PostDto2 postDto, Integer postId);

	// delete
	void deletePost(Integer postId);

	// get all posts
	PostResponse getAllPost(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);

	// get single post
	PostDto2 getPostById(Integer postId);

	// get all posts by category
	List<PostDto> getPostsByCategory(Integer categoryId);

	// get all posts by user
	List<PostDto> getPostsByUser(Integer userId);

	// search posts
	List<PostDto> searchPosts(String keyword);
}
