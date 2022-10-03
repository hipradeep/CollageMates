package com.collegemates.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "followmate")
@NoArgsConstructor
@Getter
@Setter
public class Followers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id= 0;

    @Column(name = "starting_date", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date startDate;

    private String name;

    @ManyToOne
    @JoinColumn(name="from_user_fk")
    private User from;

    @ManyToOne
    @JoinColumn(name="to_user_fk")
    private User to;

}
