package com.nt.rookie.post.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/authorpermission")
@PreAuthorize("hasAuthority('AUTHOR')")
public class AuthorPermissionController {
    @GetMapping("/")
    public ResponseEntity<?> getAuthorPage(){
        return new ResponseEntity("Welcome to author page !", HttpStatus.OK);
    }
    @GetMapping("/resource")
    public ResponseEntity<?> getAuthorResource(){
        return new ResponseEntity("Welcome to author resource !", HttpStatus.OK);
    }
}