package com.project.MyContacts;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.util.stream.Stream;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import java.util.Collections;

@SpringBootApplication
public class MyContactsApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyContactsApplication.class, args);
	}
	

    @Bean
    ApplicationRunner init(ContactRepository repository) {
        return args -> {
			Stream.of("Ana", "Mulan", "Baymax", "Merida", "Elsa", "Hercules", "Peter Pan", "Aladdin")
					.forEach(name -> {
						Contact contact = new Contact();
                		contact.setName(name);
						repository.save(contact);
						
        	});
            repository.findAll().forEach(System.out::println);
		};
	}
	
	@Bean
    public FilterRegistrationBean<CorsFilter> simpleCorsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
        config.setAllowedMethods(Collections.singletonList("*"));
        config.setAllowedHeaders(Collections.singletonList("*"));
        source.registerCorsConfiguration("/**", config);
        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(source));
        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
        return bean;
    }
}
