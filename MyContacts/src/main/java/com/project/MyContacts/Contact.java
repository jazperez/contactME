package com.project.MyContacts;

import lombok.*;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Entity;

@Entity
@Data
@NoArgsConstructor
public class Contact {
    @Id @GeneratedValue
    private Long id;
    private @NonNull String name;
	public void setName(String name2) {
	}
}