package com.nt.rookie.post.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Data
@Getter
@Setter
public class UserDto {
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String fullName;
    private Date birthDate;
    private Date joinedDate;
    private String gender;
    private String type;
    private String staffCode;
    private LocationDto location;
    private int state;
    private AuthorityDto authority;
    private int firstTime;
}
