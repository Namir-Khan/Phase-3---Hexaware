package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Customer;
import com.example.demo.Service.CustomerService;

@RestController
public class CustomerController {
	@Autowired
	CustomerService service;
	
	@PostMapping("/saveData")
	public Customer savaData(@RequestBody Customer c) {
		Customer c1 = service.dsava(c) ;
		return c1;
	}
	
	@GetMapping("/getUsers")
	public List<Customer> getData() {
		List<Customer> lst = service.gData();
		return lst;
	}
	
	@GetMapping("/getById/{actno}")
	public Customer getById(@PathVariable int actno) {
		Customer c1 = service.getById(actno);
		return c1;
	}
	
	@DeleteMapping("/removeCustomer/{actno}")
	public void removeById(@PathVariable int actno) {
		service.removeById(actno);
	}
	
	@PutMapping("/updateUser/{actno}/{amt}")
	public void updateById(@PathVariable int actno, @PathVariable double amt) {
		service.updateById(actno, amt);
	}
	
	
//	JPQL
	
	
	@GetMapping("/getUsersJPQL")
	public List<Customer> getDataJPQL() {
		List<Customer> lst = service.gDataJPQL();
		return lst;
	}
	
	@GetMapping("/getByIdJPQL/{actno}")
	public Customer getByIdJPQL(@PathVariable int actno) {
		Customer c1 = service.getByIdJPQL(actno);
		return c1;
	}
	
	@PutMapping("/userDepositJPQL/{actno}/{amt}")
	public void userDepositJPQL(@PathVariable int actno, @PathVariable double amt) {
		service.depositJPQL(actno, amt);
	}
	
	@PutMapping("/userWithdrawJPQL/{actno}/{amt}")
	public void userWithdrawJPQL(@PathVariable int actno, @PathVariable double amt) {
		service.withdrawJPQL(actno, amt);
	}
	
	@DeleteMapping("/deleteUserJPQL/{actno}")
	public void deleteByAc(@PathVariable int actno) {
		service.deleteJPQL(actno);
	}
}