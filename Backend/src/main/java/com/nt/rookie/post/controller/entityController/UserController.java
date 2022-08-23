package com.nt.rookie.post.controller.entityController;


import com.fasterxml.jackson.databind.node.ObjectNode;
import com.nt.rookie.post.dto.UserDto;
import com.nt.rookie.post.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;


@CrossOrigin
@RestController
@RequestMapping("/user")
//@PreAuthorize("hasAuthority('ADMIN')")
public class UserController {
    @Autowired
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = Objects.requireNonNull(userService);
    }

    @GetMapping("/")
    public ResponseEntity<List<UserDto>> getAll() {
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{username}")
    public ResponseEntity<UserDto> getById(@PathVariable String username) {
        return new ResponseEntity<>(userService.findByUsername(username), HttpStatus.OK);
    }

    @GetMapping("/search/{input}")
    public ResponseEntity<List<UserDto>> search(@PathVariable String input) {
        return new ResponseEntity<>(userService.searchWithGivenString(input), HttpStatus.OK);
    }

    @GetMapping("/filter/{input}")
    public ResponseEntity<List<UserDto>> filter(@PathVariable String input) {
        return new ResponseEntity<>(userService.filterByType(input), HttpStatus.OK);
    }
}
