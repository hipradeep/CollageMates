package com.collegemates.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "colleges")
@NoArgsConstructor
@Getter
@Setter
public class College {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id= 0;
    @Column(name = "collage_name", nullable = false, length = 100)
    private String name;

    @Column(name = "hUrl")
    private String hUrl;

    @Column(name = "pUrl")
    private String pUrl;


    @Column(name = "address", length = 100)
    private String address;

    @Column(name = "state")
    private String state;

    @Column(name = "country")
    private String country;

    @Column(name = "pincode")
    private String pincode;

    @Column(name = "createdDateTime", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDateTime;

    @ManyToMany(mappedBy = "colleges")
    private List<User> users;


    @PrePersist
    public void onCreatedDateTime(){
        createdDateTime=new Date();
    }


}
