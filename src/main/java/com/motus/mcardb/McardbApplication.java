package com.motus.mcardb;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class McardbApplication {

	public static void main(String[] args) {
		SpringApplication.run(McardbApplication.class, args);
	}
	
	@Bean
	
	CommandLineRunner runner() {
		return args -> {
			// Code here
		};
	}
	
	

}
