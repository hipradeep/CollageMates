package com.collegemates.entities;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.*;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "post")
@NoArgsConstructor
@Getter
@Setter
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer postId;
    @Column(name = "post_title", length = 100, nullable = false)
    private String title;
    @Column(length = 10000)
    private String content;

    private String imageName;


    private Date addedDate;

    @ManyToOne
	@JoinColumn(name = "category_id")
	private Category category;


//    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    @JoinTable(name = "post_categories_table",
//            joinColumns = @JoinColumn(name = "post_id"),
//            inverseJoinColumns = @JoinColumn(name = "category_id")
//    )
//    private List<Category> categories;


    @ManyToOne
    private User user;

//	@OneToMany(mappedBy = "post",cascade = CascadeType.ALL)
//	private Set<Comment> comments =new HashSet<>();


    @PrePersist
    public void onCreatedDateTime() {
        addedDate = new Date();
    }
}
