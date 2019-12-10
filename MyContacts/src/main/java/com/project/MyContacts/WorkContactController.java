package com.project.MyContacts;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import java.util.stream.Collectors;

@RestController
class WorkContactController {
    private final ContactRepository repository;

    public WorkContactController(final ContactRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/work-contacts")
    public Collection<Contact> workContacts() {
        return repository.findAll().stream()
                .filter(this::isFromWork)
                .collect(Collectors.toList());
    }

    private boolean isFromWork(Contact contact) {
        return contact.getName().equals("Carla") &&
                contact.getName().equals("David") &&
                contact.getName().equals("Ana");
    }

    
}