package com.collegemates.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.collegemates.entities.Category;
import com.collegemates.entities.User;
import com.collegemates.exceptions.ResourceNotFoundException;
import com.collegemates.payloads.CategoryDto;
import com.collegemates.repositories.CategoryRepo;
import com.collegemates.services.CategoryService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	private CategoryRepo categoryRepo;
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public CategoryDto createCategory(CategoryDto categoryDto) throws Exception {
		Optional<Category> pCat = this.categoryRepo.findByCategoryTitle(categoryDto.getCategoryTitle());
		if (pCat.isPresent()){
			throw new Exception("Category already present!");
		}else {
			Category cat = this.modelMapper.map(categoryDto, Category.class);
			Category addedCat = this.categoryRepo.save(cat);
			return this.modelMapper.map(addedCat, CategoryDto.class);
		}
	}

	@Override
	public CategoryDto updateCategory(CategoryDto categoryDto, Integer categoryId) {
		Category cat = this.categoryRepo.findById(categoryId)
				.orElseThrow(() -> new ResourceNotFoundException("Category", "category id", categoryId));
		cat.setCategoryTitle(categoryDto.getCategoryTitle());
		cat.setCategoryDescription(categoryDto.getCategoryDescription());
		Category updatedcat = this.categoryRepo.save(cat);
		return this.modelMapper.map(updatedcat, CategoryDto.class);

	}

	@Override
	public void deleteCategory(Integer categoryId) {
		Category cat = this.categoryRepo.findById(categoryId)
				.orElseThrow(() -> new ResourceNotFoundException("Category", "category id", categoryId));
		this.categoryRepo.delete(cat);
	}

	@Override
	public CategoryDto getCategory(Integer categoryId) {
		Category cat = this.categoryRepo.findById(categoryId)
				.orElseThrow(() -> new ResourceNotFoundException("Category", "category id", categoryId));
		return this.modelMapper.map(cat, CategoryDto.class);
	}

	@Override
	public List<CategoryDto> getAllCategories() {
		List<Category> categories = this.categoryRepo.findAll();
		List<CategoryDto> catDtos = categories.stream().map((cat) -> this.modelMapper.map(cat, CategoryDto.class))
				.collect(Collectors.toList());
		return catDtos;
	}



}
