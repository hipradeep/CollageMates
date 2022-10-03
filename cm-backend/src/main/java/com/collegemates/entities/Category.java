package com.collegemates.entities;

import javax.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "categories")
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


//	@ManyToMany(mappedBy = "categories")
//	private List<Post> posts;

}
