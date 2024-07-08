package com.codapt.idapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "**")
public class IdappApplication {

	public static void main(String[] args) {
		SpringApplication.run(IdappApplication.class, args);
	}

}
