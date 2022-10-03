package com.collegemates.controllers;

import java.io.IOException;
import java.util.List;

import javax.validation.Valid;

import com.collegemates.payloads.*;
import com.collegemates.services.FileService;
import com.collegemates.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private FileService fileService;

    @Value("${project.image}")
    private String path;

    // POST-create user
    @PostMapping("/")
    public ResponseEntity<ApiResponse<UserDto>> createUser(@Valid @RequestBody UserDto userDto) throws Exception {
        UserDto createUserDto = null;
        try {
            createUserDto = this.userService.createUser(userDto);
        } catch (Exception e) {
            return new ResponseEntity<ApiResponse<UserDto>>(new ApiResponse<>(e.getMessage(), false), HttpStatus.CREATED);
        }
        return new ResponseEntity<>(new ApiResponse<>("User created successfully!", true, createUserDto), HttpStatus.CREATED);

    }

    // PUT- update user
    @PostMapping("/{userId}")
    public ResponseEntity<ApiResponse> updateUser(@Valid @RequestBody UserSortDto userDto, @PathVariable("userId") int uid) {
        UserSortDto updateUser = this.userService.updateUser(userDto, uid);
        //return ResponseEntity.ok(updateUser);
        return new ResponseEntity<>(new ApiResponse<>("User updated successfully!", true, updateUser), HttpStatus.CREATED);
    }

    // DELETE -delete user
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{userId}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable("userId") Integer uid) {
        this.userService.deleteUser(uid);
        return new ResponseEntity<ApiResponse>(new ApiResponse("User deleted successfully!", true), HttpStatus.OK);

    }

    // GET user get
    @GetMapping("/")
    public ResponseEntity<ApiResponse<List<UserDto>>> getAllUsers() {
        List<UserDto> allUsers = this.userService.getAllUsers();

        if (allUsers.isEmpty()) {
            return new ResponseEntity<ApiResponse<List<UserDto>>>(new ApiResponse<>("No user found", false), HttpStatus.CREATED);
        } else {
            return new ResponseEntity<ApiResponse<List<UserDto>>>(new ApiResponse<>("Success", true, allUsers), HttpStatus.CREATED);
        }
    }

    // GET user get
    @GetMapping("/{userId}")
    public ResponseEntity<ApiResponse<UserDto>> getSingleUser(@PathVariable Integer userId) {

        UserDto userDto = null;
        try {
            userDto = this.userService.getUserById(userId);
        } catch (Exception e) {
            return new ResponseEntity<ApiResponse<UserDto>>(new ApiResponse<>(e.getMessage(), false), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(new ApiResponse<>("Successfully!", true, userDto), HttpStatus.OK);

    }


    // GET user get
    @GetMapping("/sort/{userId}")
    public ResponseEntity<ApiResponse<UserSortDto>> getSingleUserSort(@PathVariable Integer userId) {

        UserSortDto userSortDto = null;
        try {
            userSortDto = this.userService.getUserByIdSort(userId);
        } catch (Exception e) {
            return new ResponseEntity<ApiResponse<UserSortDto>>(new ApiResponse<>(e.getMessage(), false), HttpStatus.CREATED);
        }
        return new ResponseEntity<>(new ApiResponse<>("Successfully!", true, userSortDto), HttpStatus.CREATED);

    }


    /*USER COLLEGE */
    @PutMapping("/{userId}/college/{collegeId}")
    public ResponseEntity<ApiResponse> updateUserCollege(@Valid
                                                         @PathVariable("userId") int uid,
                                                         @PathVariable("collegeId") int cid

    ) {
        UserDto updateUser = this.userService.updateUserCollege(uid, cid);
        //return ResponseEntity.ok(updateUser);
        return new ResponseEntity<>(new ApiResponse<>("User updated successfully!", true, updateUser), HttpStatus.CREATED);
    }

    @PostMapping("/image/{userId}")
    public ResponseEntity<UserSortDto> uploadUserProfile(@RequestParam("image") MultipartFile image,
                                                    @PathVariable Integer userId) throws IOException {


        UserSortDto userSortDto = this.userService.getUserByIdSort(userId);

        System.out.println(userSortDto);

        String fileName = this.fileService.uploadImage(path, image);

        userSortDto.setProfileUrl(fileName);

        UserSortDto updatedUser = this.userService.uploadUserProfile(userSortDto, userId);
        return new ResponseEntity<UserSortDto>(updatedUser, HttpStatus.OK);
    }



}
