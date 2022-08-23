package com.nt.rookie.post.service.impl;

import com.nt.rookie.post.dto.UserDto;
import com.nt.rookie.post.mapper.UserMapper;
import com.nt.rookie.post.model.SystemUser;
import com.nt.rookie.post.repository.UserRepository;
import com.nt.rookie.post.service.UserService;
import com.nt.rookie.post.util.BcryptPassword;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepo;

    public UserServiceImpl(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public List<UserDto> findAll() {
        return UserMapper.toDtoList(this.userRepo.findAll());
    }

    @Override
    public UserDto findByUsername(String username) {
        SystemUser found = this.userRepo.findById(username).orElse(null);
        if (found == null) {
            return null;
        }
        return UserMapper.toDto(found);
    }

    @Override
    public SystemUser findWithUsername(String username) {
        return this.userRepo.findById(username).orElse(null);
    }

    @Override
    public String deleteByUsername(String username) {
        SystemUser found = this.userRepo.findById(username).orElse(null);
        if (found == null) {
            return "Cant find user with given username";
        }
        userRepo.delete(found);
        return "Delete success";
    }

    @Override
    public UserDto addUser(UserDto user) {
        SystemUser found = this.userRepo.findById(user.getUsername()).orElse(null);
        if (found != null) {
            return null;
        }
        Date date = Date.from(LocalDate.now().atStartOfDay(ZoneId.systemDefault()).toInstant());
        user.setJoinedDate(date);
        user.setPassword(new BcryptPassword().passwordEncoding(user.getPassword()));
        SystemUser userEntity = this.userRepo.save(UserMapper.toEntity(user));
        return UserMapper.toDto(userEntity);
    }

    @Override
    public UserDto updateUser(UserDto user) {
        SystemUser found = this.userRepo.findById(user.getUsername()).orElse(null);
        if (found == null) {
            return null;
        }
        user.setPassword(new BcryptPassword().passwordEncoding(user.getPassword()));
        SystemUser userEntity = this.userRepo.save(UserMapper.toEntity(user));
        return UserMapper.toDto(userEntity);
    }

    @Override
    public String changePassword(String username, String newPW) {
        System.out.println("gone to service");
        SystemUser found = this.userRepo.findById(username).orElse(null);
        found.setPassword(new BcryptPassword().passwordEncoding(newPW));
        found.setFirstTime(0);
        this.userRepo.save(found);
        return "Update password success";
    }

    @Override
    public List<UserDto> searchWithGivenString(String input) {
        String inputLower = input.toLowerCase();
        return this.findAll().stream().filter(s -> s.getStaffCode().toLowerCase().contains(inputLower)
                || s.getFullName().toLowerCase().contains(inputLower)).collect(Collectors.toList());
    }

    @Override
    public List<UserDto> filterByType(String type) {
        return this.findAll().stream().filter(s -> s.getType().equals(type)).collect(Collectors.toList());
    }
}
