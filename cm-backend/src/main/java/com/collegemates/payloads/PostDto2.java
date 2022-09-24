package com.collegemates.payloads;

import com.collegemates.entities.Category;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.sql.Date;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class PostDto2 {
	
	private Integer Id;
	
	@NotBlank
	private String title;
	@NotBlank
	private String content;
	private String imageName;
	private Date addedDate;

	private List<CategoryDto2> categories;

	@NotBlank
	private UserDto user;
	
	//private Set<CommentDto> comments =new HashSet<>();


	@Override
	public String toString() {
		return "PostDto2{" +
				"Id=" + Id +
				", title='" + title + '\'' +
				", content='" + content + '\'' +
				", imageName='" + imageName + '\'' +
				", addedDate=" + addedDate +
				", category=" + categories +
				", user=" + user +
				'}';
	}
}
