package com.collegemates;

import com.collegemates.config.AppConstants;
import com.collegemates.entities.Role;
import com.collegemates.repositories.RoleRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class CollegeMatesApplication implements CommandLineRunner {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepo roleRepo;

    public static void main(String[] args) {
        SpringApplication.run(CollegeMatesApplication.class, args);
    }

    @Bean
    ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Override
    public void run(String... args) throws Exception {
        //System.out.println("----> "+this.passwordEncoder.encode("123"));

        try {
            Role r = new Role();
            r.setId(AppConstants.ADMIN_USER);
            r.setName("ROLE_ADMIN");

            Role r2 = new Role();
            r2.setId(AppConstants.NORMAL_USER);
            r2.setName("ROLE_NORMAL");

            List<Role> roles = new ArrayList<>();
            roles.add(r);
            roles.add(r2);

            List<Role> savedRoles = this.roleRepo.saveAll(roles);
            savedRoles.forEach(ro -> System.out.println(ro.getName()));

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://localhost:7000");
            }
        };
    }
}
