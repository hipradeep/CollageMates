package com.collegemates.payloads;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@NoArgsConstructor
@Getter
@Setter
public class CollegeDto {

    private Integer id;

    @NotEmpty
    @Size(min = 4, message = "Username must have min 4 characters")
    private String name;


    private String hUrl;
    private String pUrl;
    private String country;

    @NotEmpty
    private String address;

    @NotEmpty
    private String state;

    @NotEmpty
    @Size(min = 6,max=6,  message = "pincode must be of 6 length")
    private String pincode;


}
