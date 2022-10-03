package com.collegemates.controllers;



import com.collegemates.exceptions.BadCredentialException;
import com.collegemates.helper.JwtUtil;
import com.collegemates.entities.JwtAuthResponse;
import com.collegemates.entities.JwtAuthRequest;
import com.collegemates.payloads.UserDto;
import com.collegemates.payloads.UserSortDto;
import com.collegemates.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class JwtAuthController {

    @Autowired
    private JwtUtil jwtTokenHelper;
    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<JwtAuthResponse<String>> createToken(@RequestBody JwtAuthRequest request) throws Exception {
        this.authentication(request.getUsername(), request.getPassword());

        UserDetails userDetails = this.userDetailsService.loadUserByUsername(request.getUsername());

        String token=this.jwtTokenHelper.generateToken(userDetails);
        JwtAuthResponse<String> response=new JwtAuthResponse<String>();

        response.setToken(token);

        UserSortDto userSortDto = null;
        try {
            userSortDto = this.userService.getUserByEmail(request.getUsername());
        } catch (Exception e) {
            return new ResponseEntity<JwtAuthResponse<String>>(new JwtAuthResponse<>(e.getMessage(), false), HttpStatus.CREATED);
        }
        return new ResponseEntity<>(new JwtAuthResponse<>("Successfully!", true, token, userSortDto), HttpStatus.CREATED);
    }

    private void authentication(String username, String password) throws Exception {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(username, password);

        try {
            this.authenticationManager.authenticate(usernamePasswordAuthenticationToken);
        } catch (BadCredentialsException | UsernameNotFoundException e) {
            throw new BadCredentialException("Bad Credentials!!");
        }
    }

    //  register new user
    @PostMapping("/register")
    public ResponseEntity<UserDto> registerUser(@RequestBody UserDto userDto) {
        UserDto registeredUser = this.userService.registerNewUser(userDto);
        return new ResponseEntity<UserDto>(registeredUser, HttpStatus.CREATED);
    }
}

