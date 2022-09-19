package com.collegemates.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
  

@Controller
public class DemoController {
  
    @RequestMapping("/a")
    @ResponseBody
    public String welcome()
    {
        return "Hello Pradeep";
    }
}