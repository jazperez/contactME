package com.project.ApplicationUser;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationUserRepository extends JpaRepository<ApplicationUser, Long>{
    ApplicationUser findByUserName(String username);
}