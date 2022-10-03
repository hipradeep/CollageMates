package com.collegemates.payloads;

import lombok.Data;

import java.io.Serializable;

/**
 * A DTO for the {@link com.collegemates.entities.User} entity
 */
@Data
public class UserSortDto2 implements Serializable {

    private final Integer id;
    private final String name;
    private final String email;
    private final String userType;
    private final String dob;
    private final String profileUrl;
    private final String bio;
    private final String address;

}