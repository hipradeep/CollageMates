package com.collegemates.controllers;

import java.util.List;

import javax.validation.Valid;

import com.collegemates.payloads.ApiResponse;
import com.collegemates.payloads.CategoryDto;
import com.collegemates.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

	@Autowired
	CategoryService categoryService;

	// POST-create categories
	@PostMapping("/")
	public ResponseEntity<ApiResponse<CategoryDto>> createCategory(@Valid @RequestBody CategoryDto categoryDto) {
		CategoryDto createCatDto;
		try{
			createCatDto = this.categoryService.createCategory(categoryDto);
		}catch (Exception e){
			return new ResponseEntity<>(new ApiResponse<>(e.getMessage(), false), HttpStatus.CREATED);
		}
		return new ResponseEntity<>(new ApiResponse<>("Category created successfully!", true, createCatDto), HttpStatus.CREATED);

	}

	// PUT- update category

	@PutMapping("/{catId}")
	public ResponseEntity<ApiResponse<CategoryDto>> updateCategory(@Valid @RequestBody CategoryDto categoryDto,
			@PathVariable("catId") int cid) {
		CategoryDto updateCatDto = this.categoryService.updateCategory(categoryDto, cid);
		return new ResponseEntity<>(new ApiResponse<>("Category updated successfully!", true, updateCatDto), HttpStatus.CREATED);
	}

	// DELETE -delete category
	@DeleteMapping("/{catId}")
	public ResponseEntity<ApiResponse> deleteCategory(@PathVariable("catId") Integer cid) {
		this.categoryService.deleteCategory(cid);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Category deleted Successfully!", true), HttpStatus.OK);

	}

	// GET category get
	@GetMapping("/")
	public ResponseEntity<ApiResponse<List<CategoryDto>>> getAllCategory() {
		List<CategoryDto> allCategories = this.categoryService.getAllCategories();
		if (allCategories.isEmpty()){
			return new ResponseEntity<>(new ApiResponse<>("No category found", false), HttpStatus.CREATED);
		}else {
			return new ResponseEntity<>(new ApiResponse<>("Success", true, allCategories), HttpStatus.CREATED);
		}
	}

	// GET user get
	@GetMapping("/{catId}")
	public ResponseEntity<CategoryDto> getSingleUser(@PathVariable("catId") Integer cId) {
		return ResponseEntity.ok(this.categoryService.getCategory(cId));
	}
}
