package com.collegemates.services;

import java.util.List;

import com.collegemates.payloads.CategoryDto;


public interface CategoryService {

	// create CategoryDto
	CategoryDto createCategory(CategoryDto categoryDto) throws Exception;

	// update
	CategoryDto updateCategory(CategoryDto categoryDto, Integer categoryId);

	// delete void
	void deleteCategory(Integer categoryId);

	// get I
	CategoryDto getCategory(Integer categoryId);

	// get All
	List<CategoryDto> getAllCategories();
}
