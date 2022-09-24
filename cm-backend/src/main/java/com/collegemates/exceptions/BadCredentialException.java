package com.collegemates.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BadCredentialException extends RuntimeException{
    String message;
    boolean status;

    public BadCredentialException(String message) {
        super(message);
        this.message = message;
    }

    public BadCredentialException() {
        super();
    }
}
