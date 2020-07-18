package com.motus.mcardb.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.motus.mcardb.domain.Car;
import com.motus.mcardb.domain.CarRepository;

@RestController
public class CarController {
	@Autowired
	private CarRepository repository;

	@RequestMapping("/cars")
	public Iterable<Car> getCars() {
		return repository.findAll();
	}
}
