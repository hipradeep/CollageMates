package com.collegemates.services;

import com.collegemates.payloads.UserDto;
import com.collegemates.payloads.UserSortDto;
import com.collegemates.payloads.UserSortDto2;

import java.text.ParseException;
import java.util.List;


public interface UserService {

	UserDto registerNewUser(UserDto user);
	UserDto createUser(UserDto user) throws Exception;

	UserSortDto updateUser(UserSortDto user, Integer userId);

	UserDto getUserById(Integer userId);

	UserSortDto2 getFullDetailsUserById(Integer userId);

	UserSortDto getUserByEmail(String email);

	UserSortDto getUserByIdSort(Integer userId);

	List<UserDto> getAllUsers();

	void deleteUser(Integer userId);

    UserDto updateUserCollege( int uid, int cid);

	UserSortDto uploadUserProfile(UserSortDto userSortDto,Integer userId);
}
