package com.nt.rookie.post.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
@PreAuthorize("hasAuthority('ADMIN')")
public class AdminController {
    @GetMapping("/")
    public ResponseEntity<?> getAdminPage(){
        return new ResponseEntity("Welcome to admin page !", HttpStatus.OK);
    }
    @GetMapping("/resource")
    public ResponseEntity<?> getAdminResource(){
        return new ResponseEntity("Welcome to admin resource !", HttpStatus.OK);
    }
}
