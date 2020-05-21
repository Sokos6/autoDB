package com.motus.mcardb;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
	}
// If we want to test in memory users 	
//	@Bean
//	@Override
//	public UserDetailsService userDetailsService() {
//		UserDetails user = 
//				User.withDefaultPasswordEncoder()
//				.username("user")
//				.password("password")
//				.roles("USER)"
//				.build();
//				
//		return new InMemoryUserDetailsManager(user);
//	}

}
