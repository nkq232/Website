package com.nt.rookie.post.mapper;

import com.nt.rookie.post.dto.AssignmentDto;
import com.nt.rookie.post.model.Assignment;

public class AssignmentMapper {
    public static AssignmentDto toDto(Assignment assignment) {
        AssignmentDto result = new AssignmentDto();
        result.setId(assignment.getId());
        result.setAssignedTo(UserMapper.toDto(assignment.getAssignedTo()));
        result.setAsset(AssetMapper.toDto(assignment.getAsset()));
        result.setAssignedDate(assignment.getAssignedDate());
        result.setState(assignment.getState());
        result.setNote(assignment.getNote());
        result.setReturnDate(assignment.getReturnDate());
        result.setAssignedBy(UserMapper.toDto(assignment.getAssignedBy()));
        result.setAcceptedBy(UserMapper.toDto(assignment.getAcceptedBy()));
        return result;
    }

    public static Assignment toEntity(AssignmentDto assignment) {
        Assignment result = new Assignment();
        result.setId(assignment.getId());
        result.setAssignedTo(UserMapper.toEntity(assignment.getAssignedTo()));
        result.setAsset(AssetMapper.toEntity(assignment.getAsset()));
        result.setAssignedDate(assignment.getAssignedDate());
        result.setState(assignment.getState());
        result.setNote(assignment.getNote());
        result.setReturnDate(assignment.getReturnDate());
        result.setAssignedBy(UserMapper.toEntity(assignment.getAssignedBy()));
        result.setAcceptedBy(UserMapper.toEntity(assignment.getAcceptedBy()));
        return result;
    }
}
