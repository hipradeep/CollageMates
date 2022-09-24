package com.collegemates.repositories;

import java.util.List;

import com.collegemates.entities.Category;
import com.collegemates.entities.Post;
import com.collegemates.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface PostRepo extends JpaRepository<Post, Integer> {

	List<Post> findByUser(User user);

	//List<Post> findByCategory(Category category);

	List<Post> findByTitleContaining(String keyword);
	
	@Query("select p from Post p where p.title like :key") //p is object, nospace [:key]
	List<Post> searchByTitle(@Param("key") String title);
}
