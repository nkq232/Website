package com.nt.rookie.post.repository;

import com.nt.rookie.post.model.SystemUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<SystemUser, String> {
}
