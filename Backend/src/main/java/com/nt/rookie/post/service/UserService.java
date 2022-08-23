package com.nt.rookie.post.service;

import com.nt.rookie.post.dto.UserDto;
import com.nt.rookie.post.model.SystemUser;

import java.util.List;

public interface UserService {
    List<UserDto> findAll();
    SystemUser findWithUsername(String username);
    UserDto findByUsername(String username);
    String deleteByUsername(String username);
    UserDto addUser(UserDto user);
    UserDto updateUser(UserDto user);
    String changePassword(String username, String newPW);
    List<UserDto> searchWithGivenString(String input);
    List<UserDto> filterByType(String type);

}
