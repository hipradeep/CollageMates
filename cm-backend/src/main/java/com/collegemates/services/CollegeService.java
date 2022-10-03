package com.collegemates.services;

import com.collegemates.payloads.CollegeDto;
import com.collegemates.payloads.PostDto;
import com.collegemates.payloads.PostDto2;
import com.collegemates.payloads.PostResponse;

import java.util.List;

public interface CollegeService {
    // create
    CollegeDto createCollege(CollegeDto collegeDto);

    // update
    CollegeDto updateCollege(CollegeDto collegeDto, Integer collegeId);

    // delete
    void deleteCollege(Integer collegeId);

    // get all posts
    //PostResponse getAllCollege(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);

    // get single post
    CollegeDto getCollegeById(Integer collegeId);


    List<CollegeDto>  getCollegeByName(String collegeName);

    // get all posts by category
   // List<PostDto> getPostsByCategory(Integer categoryId);

    /// get all posts by user
   // List<PostDto> getPostsByUser(Integer userId);

    // search posts
    //List<PostDto> searchPosts(String keyword);
}
