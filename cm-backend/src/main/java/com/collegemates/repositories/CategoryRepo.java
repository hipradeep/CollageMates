package com.collegemates.repositories;

import com.collegemates.entities.Category;
import com.collegemates.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface CategoryRepo extends JpaRepository<Category, Integer> {

    Optional<Category> findByCategoryTitle(String title);

}
