package com.project.MyContacts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
interface ContactRepository extends JpaRepository<Contact, Long> {
}