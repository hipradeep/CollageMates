package com.collegemates.services;

import com.collegemates.payloads.UserDto;

import java.text.ParseException;
import java.util.List;


public interface UserService {

	UserDto createUser(UserDto user) throws Exception;

	UserDto updateUser(UserDto user, Integer userId);

	UserDto getUserById(Integer userId);

	List<UserDto> getAllUsers();

	void deleteUser(Integer userId);

}
