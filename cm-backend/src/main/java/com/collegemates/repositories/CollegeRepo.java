package com.collegemates.repositories;

import com.collegemates.entities.College;
import com.collegemates.entities.Post;
import com.collegemates.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CollegeRepo extends JpaRepository<College, Integer> {

    @Query("select c from College c where upper(c.name) like upper(concat('%', :name, '%'))")
    List<College> searchByName(@Param("name") String name);

}
