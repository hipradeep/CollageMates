package com.collegemates;

import com.collegemates.entities.User;
import com.collegemates.repositories.UserRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CollegeMatesApplicationTests {

    @Autowired
    private UserRepo userRepo;
    @Test
    void contextLoads() {
    }

    @Test
    public void repoTest() {
        String className = this.userRepo.getClass().getName();
        Package packName = this.userRepo.getClass().getPackage();
      //  System.out.println("@@@"+className);
        //System.out.println("P  "+ packName.getName());
    }
}
