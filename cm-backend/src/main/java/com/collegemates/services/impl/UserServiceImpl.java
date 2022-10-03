package com.collegemates.services.impl;

import java.util.*;
import java.util.stream.Collectors;

import com.collegemates.config.AppConstants;
import com.collegemates.entities.College;
import com.collegemates.entities.Role;
import com.collegemates.entities.User;
import com.collegemates.exceptions.ResourceNotFoundException;
import com.collegemates.payloads.UserDto;
import com.collegemates.payloads.UserSortDto;
import com.collegemates.payloads.UserSortDto2;
import com.collegemates.repositories.CollegeRepo;
import com.collegemates.repositories.RoleRepo;
import com.collegemates.repositories.UserRepo;
import com.collegemates.services.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private CollegeRepo collegeRepo;
    @Autowired(required = true)
    private ModelMapper modelMapper;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepo roleRepo;

    @Override
    public UserDto registerNewUser(UserDto userDto) {

       User user= this.modelMapper.map(userDto, User.class);

       user.setPassword(this.passwordEncoder.encode(user.getPassword()));

       //role
        Role role = this.roleRepo.findById(AppConstants.NORMAL_USER).get();
        user.getRoles().add(role);
        User savedUser=this.userRepo.save(user);

        return this.modelMapper.map(savedUser, UserDto.class);
    }

    @Override
    public UserDto createUser(UserDto userDto) throws Exception {

        Optional<User> user = this.userRepo.findByEmail(userDto.getEmail());

        User user1 = this.dtoToUser(userDto);

//        System.out.println(userDto.getDob());
//        user.setCreatedDateTime(DateUtil.formatDate(userDto.getDob()));
//        System.out.println(user.getDob());

        User savedUser = null;
        if (user.isPresent()){
            throw new Exception("User already exits");
        }else {
            savedUser = this.userRepo.save(user1);
        }
        return this.userToDto(savedUser);
    }

    @Override
    public UserSortDto updateUser(UserSortDto userDto, Integer userId) {

        User user = this.userRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "Id ", userId));
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());

        user.setBio(userDto.getBio());
        user.setDob(userDto.getDob());
        User updatedUser = this.userRepo.save(user);

        return this.modelMapper.map(updatedUser, UserSortDto.class);
    }

    @Override
    public UserDto getUserById(Integer userId) {
        User user = this.userRepo.findById(userId)  .orElseThrow(() -> new ResourceNotFoundException("User", " Id ", userId));
        return this.modelMapper.map(user, UserDto.class);
    }

    @Override
    public UserSortDto2 getFullDetailsUserById(Integer userId) {
        User user = this.userRepo.findById(userId)  .orElseThrow(() -> new ResourceNotFoundException("User", " Id ", userId));
        return this.modelMapper.map(user, UserSortDto2.class);
    }

    @Override
    public UserSortDto getUserByEmail(String email) {

        User user = this.userRepo.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("User", " Email "+email, 0));
        return this.modelMapper.map(user, UserSortDto.class);
    }

    @Override
    public UserSortDto getUserByIdSort(Integer userId) {
        User user = this.userRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", " Id ", userId));
        return this.modelMapper.map(user, UserSortDto.class);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = this.userRepo.findAll();
        List<UserDto> userDtos = users.stream().map(user -> this.userToDto(user)).collect(Collectors.toList());
        return userDtos;
    }

    @Override
    public void deleteUser(Integer userId) {
        User user = this.userRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", " Id ", userId));
        this.userRepo.delete(user);

    }

    @Override
    public UserDto updateUserCollege( int uid, int cid) {
        User user = this.userRepo.findById(uid).orElseThrow(() -> new ResourceNotFoundException("User", "Id ", uid));
        College collegeWithCid = this.collegeRepo.findById(cid).orElseThrow(() -> new ResourceNotFoundException("College", "Id ", cid));
        List<College> allCollages = new ArrayList<>();

        allCollages.add(collegeWithCid);

        allCollages.addAll(user.getColleges());

        user.setColleges(allCollages);
        User updatedUser = this.userRepo.save(user);
        return this.modelMapper.map(updatedUser, UserDto.class);
    }

    @Override
    public UserSortDto uploadUserProfile(UserSortDto userSortDto, Integer userId) {

        User user = this.userRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "Id ", userId));

        user.setProfileUrl(userSortDto.getProfileUrl());

        System.out.println(user);
        User updatedUser = this.userRepo.save(user);
        return this.modelMapper.map(updatedUser, UserSortDto.class);
    }

    public User dtoToUser(UserDto userDto) {
        User user = this.modelMapper.map(userDto, User.class);
//		User user = new User();
//		user.setId(userDto.getId());
//		user.setName(userDto.getName());
//		user.setEmail(userDto.getEmail());
//		user.setAbout(userDto.getAbout());
//		user.setPassword(userDto.getPassword());
        return user;
    }

    public UserDto userToDto(User user) {
        UserDto userDto = this.modelMapper.map(user, UserDto.class);
//		UserDto userDto = new UserDto();
//		userDto.setId(user.getId());
//		userDto.setName(user.getName());
//		userDto.setEmail(user.getEmail());
//		userDto.setAbout(user.getAbout());
//		userDto.setPassword(user.getPassword());
        return userDto;
    }

}
