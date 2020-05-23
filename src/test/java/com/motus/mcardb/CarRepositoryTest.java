package com.motus.mcardb;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import com.motus.mcardb.domain.Car;
import com.motus.mcardb.domain.CarRepository;

@RunWith(SpringRunner.class)
@DataJpaTest
public class CarRepositoryTest {

	@Autowired
	private TestEntityManager entityManager;
	
	@Autowired
	private CarRepository repository;
	
	// Test Cases
}
