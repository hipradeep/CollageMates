package com.collegemates.controllers;

import com.collegemates.payloads.ApiResponse;
import com.collegemates.payloads.CollegeDto;
import com.collegemates.payloads.PostDto;
import com.collegemates.payloads.UserDto;
import com.collegemates.services.CollegeService;
import com.collegemates.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/college")
public class CollegeController {
    @Autowired
    private CollegeService collegeService;

    // POST-create user
    @PostMapping("/")
    public ResponseEntity<ApiResponse<CollegeDto>> createCollege(@Valid @RequestBody CollegeDto collegeDto)  {


        CollegeDto createCollegeDto=null;
        try{
            createCollegeDto = this.collegeService.createCollege(collegeDto);
        }catch (Exception e){
            return new ResponseEntity<ApiResponse<CollegeDto>>(new ApiResponse<>(e.getMessage(), false), HttpStatus.CREATED);
        }
        return new ResponseEntity<>(new ApiResponse<>("College created successfully!", true, createCollegeDto), HttpStatus.CREATED);

    }

    // PUT- update user
    @PutMapping("/{collegeId}")
    public ResponseEntity<ApiResponse> updateCollege(@Valid @RequestBody CollegeDto collegeDto, @PathVariable("collegeId") int cid) {
        CollegeDto collegeDto1 = this.collegeService.updateCollege(collegeDto, cid);
        //return ResponseEntity.ok(updateUser);
        return new ResponseEntity<>(new ApiResponse<>("College updated successfully!", true, collegeDto1), HttpStatus.CREATED);
    }
    // DELETE -delete college
    @DeleteMapping("/{collegeId}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable("collegeId") Integer uid) {
        this.collegeService.deleteCollege(uid);
        return new ResponseEntity<ApiResponse>(new ApiResponse("College deleted successfully!", true), HttpStatus.OK);

    }

    // GET college
    @GetMapping("/{collegeId}")
    public ResponseEntity<ApiResponse> getSingleCollege(@PathVariable Integer collegeId) {

        CollegeDto collegeDto = this.collegeService.getCollegeById(collegeId);
        return new ResponseEntity<>(new ApiResponse<>("Successful!", true, collegeDto), HttpStatus.CREATED);
    }
    // search post
    @GetMapping("/search/{keyword}")
    public ResponseEntity<ApiResponse> searchPostByTitle(@PathVariable String keyword) {

        List<CollegeDto> collegeDtos = this.collegeService.getCollegeByName(keyword);


        return new ResponseEntity<>(new ApiResponse<>("Successfully!", true, collegeDtos),
                HttpStatus.OK);
    }
}
