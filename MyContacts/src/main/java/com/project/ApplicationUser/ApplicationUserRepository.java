package com.project.ApplicationUser;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationUserRepository extends JpaRepository{
    ApplicationUser findByUserName(String username);
}