package com.collegemates.payloads;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PostDto {
	
	private Integer Id;
	
	@NotBlank
	private String title;
	@NotBlank
	private String content;

	private String imageName;

	private Date addedDate;

	private CategoryDto2 category;

	@NotBlank
	private UserSortDto user;
	
	//private Set<CommentDto> comments =new HashSet<>();
}
