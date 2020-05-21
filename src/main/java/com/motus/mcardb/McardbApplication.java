package com.motus.mcardb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.motus.mcardb.domain.Car;
import com.motus.mcardb.domain.CarRepository;
import com.motus.mcardb.domain.Owner;
import com.motus.mcardb.domain.OwnerRepository;

@SpringBootApplication
public class McardbApplication {
	// Inject repositories
	@Autowired
	private CarRepository repository;

	@Autowired
	private OwnerRepository orepository;

	public static void main(String[] args) {
		SpringApplication.run(McardbApplication.class, args);
	}

	@Bean
	
	CommandLineRunner runner(){
        return args -> {
        	// add owner objects and save these to db
        	Owner owner1 = new Owner("Will", "Sokolowski");
        	Owner owner2 = new Owner("Oscar", "Millan");
        	orepository.save(owner1);
        	orepository.save(owner2);
        	
        	// Add car object with link to owners and save these to db 
        	Car car = new Car("Ford", "Mustang", "Red", 
                    "ADF-1121", 2017, 59000, owner1);
                repository.save(car);
                car = new Car("Nissan", "Leaf", "White",
                    "SSJ-3002", 2014, 29000, owner2);
                repository.save(car);
                car = new Car("Toyota", "Prius", "Silver",
                    "KKO-0212", 2018, 39000, owner2);
                repository.save(car);
        };
	}

}
