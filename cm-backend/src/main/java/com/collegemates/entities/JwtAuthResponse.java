package com.collegemates.entities;

import com.collegemates.payloads.UserSortDto;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor

@JsonInclude(JsonInclude.Include.NON_NULL)
public class JwtAuthResponse<T> {
    private String message;
    private boolean status;
    private T token;
    private UserSortDto user;

    public JwtAuthResponse(String message, boolean status) {
        this.message = message;
        this.status = status;
    }

    public JwtAuthResponse(String message, boolean status, T token, UserSortDto user) {
        this.message = message;
        this.status = status;
        this.token = token;
        this.user = user;
    }

    public JwtAuthResponse(String s, boolean b, UserSortDto userSortDto) {
    }
}
