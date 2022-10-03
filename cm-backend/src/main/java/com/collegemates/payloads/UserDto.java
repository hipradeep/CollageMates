package com.collegemates.payloads;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.*;

import com.collegemates.entities.Role;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@NoArgsConstructor
@Getter
@Setter
public class UserDto {

	private Integer id;
	@NotEmpty
	@Size(min = 4, message = "Username must have min 4 characters")
	private String name;

	@Email(message = "Your email is not valid")
	private String email;
	
	@NotEmpty
	@Size(min = 3,max=10,  message = "password must be of min 3 and max 10 characters")
	private String password;
	
	@NotEmpty
	private String userType;


	private String bio;

	@Temporal(TemporalType.DATE)
	private Date dob;

	private String address;

	private List<CollegeDto> colleges;

	private Set<RoleDto> roles = new HashSet<>();

	@Override
	public String toString() {
		return "UserDto{" +
				"id=" + id +
				", name='" + name + '\'' +
				", email='" + email + '\'' +
				", password='" + password + '\'' +
				", userType='" + userType + '\'' +
				", bio='" + bio + '\'' +
				", dob='" + dob + '\'' +
				", collegeDtos=" + colleges +
				'}';
	}
}