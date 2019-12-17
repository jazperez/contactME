package com.project.MyContacts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin(origins = "https://focused-einstein-bfb28f.netlify.com")
interface ContactRepository extends JpaRepository<Contact, Long> {
}