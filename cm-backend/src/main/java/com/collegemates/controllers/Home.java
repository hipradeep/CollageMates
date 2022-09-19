package com.collegemates.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Home {

    @RequestMapping("/")
    public String helloGFG()
    {
        return "Hello Pradeep";
    }

    @RequestMapping("/welcome")
    public String homeAS()
    {
        return "Hello Pradeep As";
    }
}
