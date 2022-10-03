package com.collegemates.payloads;

import com.collegemates.entities.Category;
import com.collegemates.entities.Post;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.Set;

@NoArgsConstructor
@Getter
@Setter
public class CategoryDto2 {

	private Integer categoryId;
	@NotBlank
	@Size(min=4, message = "Username must have min 4 dharacters")
	private String categoryTitle;
	@NotBlank
	@Size(min=12, message = "Username must have min 12 dharacters")
	private String categoryDescription;


}
