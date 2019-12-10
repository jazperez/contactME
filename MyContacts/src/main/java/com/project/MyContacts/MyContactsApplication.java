package com.project.MyContacts;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.util.stream.Stream;

@SpringBootApplication
public class MyContactsApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyContactsApplication.class, args);
	}
	

    @Bean
    ApplicationRunner init(ContactRepository repository) {
        return args -> {
			Stream.of("Ana", "Beatriz", "Carla", "David", "Elizabeth", "Fredrick")
					.forEach(name -> {
						Contact contact = new Contact();
                		contact.setName(name);
                		repository.save(contact);
						
        });
            repository.findAll().forEach(System.out::println);
	};
}
		
}
