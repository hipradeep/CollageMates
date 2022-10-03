package com.collegemates.payloads;


import com.collegemates.entities.Category;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class PostDto3 {

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
