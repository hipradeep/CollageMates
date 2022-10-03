package com.collegemates.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "feedback")
@NoArgsConstructor
@Getter
@Setter
public class FeedBack {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id= 0;
    @Column(name = "feedback", nullable = false, length = 500)
    private String feedback;

    @Column(name = "createdDateTime", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDateTime;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
