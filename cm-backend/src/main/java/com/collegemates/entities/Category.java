package com.collegemates.entities;

import javax.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "post_categories")
@NoArgsConstructor
@Getter
@Setter
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer categoryId;
	@Column(name = "title", length = 100, unique = true, nullable = false)
	private String categoryTitle;
	@Column(name = "description")
	private String categoryDescription;
}
