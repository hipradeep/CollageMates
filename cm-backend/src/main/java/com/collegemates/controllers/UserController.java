package com.collegemates.controllers;

import java.util.List;

import javax.validation.Valid;

import com.collegemates.payloads.ApiResponse;
import com.collegemates.payloads.UserDto;
import com.collegemates.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api/users")
public class UserController {
	@Autowired
	private UserService userService;

	// POST-create user
	@PostMapping("/")
	public ResponseEntity<ApiResponse<UserDto>> createUser(@Valid  @RequestBody UserDto userDto) throws Exception {
		UserDto createUserDto=null;
		try{
			 createUserDto = this.userService.createUser(userDto);
		}catch (Exception e){
			return new ResponseEntity<ApiResponse<UserDto>>(new ApiResponse<>(e.getMessage(), false), HttpStatus.CREATED);
		}
		return new ResponseEntity<>(new ApiResponse<>("User created successfully!", true, createUserDto), HttpStatus.CREATED);

	}

	// PUT- update user
	@PutMapping("/{userId}")
	public ResponseEntity<ApiResponse> updateUser(@Valid @RequestBody UserDto userDto, @PathVariable("userId") int uid) {
		UserDto updateUser = this.userService.updateUser(userDto, uid);
		//return ResponseEntity.ok(updateUser);
		return new ResponseEntity<>(new ApiResponse<>("User updated successfully!", true, updateUser), HttpStatus.CREATED);
	}

	// DELETE -delete user
	@DeleteMapping("/{userId}")
	public ResponseEntity<ApiResponse> deleteUser(@PathVariable("userId") Integer uid) {
		this.userService.deleteUser(uid);
		return new ResponseEntity<ApiResponse>(new ApiResponse("User deleted successfully!", true), HttpStatus.OK);


	}

	// GET user get
	@GetMapping("/")
	public ResponseEntity<ApiResponse<List<UserDto>>> getAllUsers() {
		List<UserDto> allUsers = this.userService.getAllUsers();

		if (allUsers.isEmpty()){
			return new ResponseEntity<ApiResponse<List<UserDto>>>(new ApiResponse<>("No user found", false), HttpStatus.CREATED);
		}else {
			return new ResponseEntity<ApiResponse<List<UserDto>>>(new ApiResponse<>("Success", true, allUsers), HttpStatus.CREATED);
		}
	}

	// GET user get
	@GetMapping("/{userId}")
	public ResponseEntity<UserDto> getSingleUser(@PathVariable Integer userId) {
		return ResponseEntity.ok(this.userService.getUserById(userId));
	}
}
