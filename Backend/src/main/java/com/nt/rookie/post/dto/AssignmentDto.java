package com.nt.rookie.post.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Data
@Getter
@Setter
public class AssignmentDto {
    private int id;
    private UserDto assignedTo;
    private AssetDto asset;
    private Date assignedDate;
    private int state;
    private String note;
    private Date returnDate;
    private UserDto assignedBy;
    private UserDto acceptedBy;
}
