package com.collegemates.payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@NoArgsConstructor
@Getter
@Setter
public class UserSortDto {

	private Integer id;
	@NotEmpty
	@Size(min = 4, message = "Username must have min 4 characters")
	private String name;
	private String bio;
	private String address;
	private String email;

	@Temporal(TemporalType.DATE)
	private Date dob;
		private  String userType;
	private String profileUrl;


}