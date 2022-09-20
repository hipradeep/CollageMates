package com.collegemates;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class CollegeMatesApplication {

	public static void main(String[] args) {
		SpringApplication.run(CollegeMatesApplication.class, args);
	}

}
