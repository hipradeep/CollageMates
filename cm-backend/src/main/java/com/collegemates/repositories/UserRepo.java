package com.collegemates.repositories;

import java.util.Optional;

import com.collegemates.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;



public interface UserRepo extends JpaRepository<User, Integer> {

	Optional<User> findByEmail(String username);

}
