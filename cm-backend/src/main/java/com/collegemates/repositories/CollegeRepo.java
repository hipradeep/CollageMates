package com.collegemates.repositories;

import com.collegemates.entities.College;
import com.collegemates.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CollegeRepo extends JpaRepository<College, Integer> {
}
