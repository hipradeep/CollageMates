package com.collegemates.services.impl;

import com.collegemates.entities.College;
import com.collegemates.entities.Post;
import com.collegemates.entities.User;
import com.collegemates.exceptions.ResourceNotFoundException;
import com.collegemates.payloads.CollegeDto;
import com.collegemates.payloads.PostDto;
import com.collegemates.repositories.CollegeRepo;
import com.collegemates.repositories.UserRepo;
import com.collegemates.services.CollegeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CollegeServiceImpl implements CollegeService {


    @Autowired
    private CollegeRepo collegeRepo;

    @Autowired(required = true)
    private ModelMapper modelMapper;

    @Override
    public CollegeDto createCollege(CollegeDto collegeDto) {
        College college = this.modelMapper.map(collegeDto, College.class);
        college.setPUrl("default.png");
        college.setHUrl("default.png");
        college.setCountry("india");
       College savedCollege = this.collegeRepo.save(college);
        return this.modelMapper.map(savedCollege, CollegeDto.class);
    }

    @Override
    public CollegeDto updateCollege(CollegeDto collegeDto, Integer collegeId) {
        College college = this.collegeRepo.findById(collegeId).orElseThrow(() -> new ResourceNotFoundException("User", "Id ", collegeId));
        college.setName(collegeDto.getName());
        college.setAddress(collegeDto.getAddress());
        college.setPincode(collegeDto.getPincode());
        college.setState(collegeDto.getState());
        college.setHUrl(collegeDto.getHUrl());
        college.setPUrl(collegeDto.getPUrl());
        College updatedCollege = this.collegeRepo.save(college);


        return this.modelMapper.map(updatedCollege, CollegeDto.class);
    }

    @Override
    public void deleteCollege(Integer collegeId) {
        College college = this.collegeRepo.findById(collegeId)
                .orElseThrow(() -> new ResourceNotFoundException("College", " Id ", collegeId));
        this.collegeRepo.delete(college);
    }

    @Override
    public CollegeDto getCollegeById(Integer collegeId) {
        College college = this.collegeRepo.findById(collegeId)
                .orElseThrow(() -> new ResourceNotFoundException("College", " Id ", collegeId));
        return  this.modelMapper.map(college, CollegeDto.class);
    }

    @Override
    public List<CollegeDto> getCollegeByName(String collegeName) {

        List<College> colleges = this.collegeRepo.searchByName(collegeName);
        List<CollegeDto> collegeDtos = colleges.stream().map((college) -> this.modelMapper.map(college, CollegeDto.class))
                .collect(Collectors.toList());
        return collegeDtos;

    }



}
