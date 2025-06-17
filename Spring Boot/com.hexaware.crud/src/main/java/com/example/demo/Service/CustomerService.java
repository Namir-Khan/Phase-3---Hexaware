package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Customer;
import com.example.demo.JpaRespo.CustomerRepo;

@Service
public class CustomerService {
	@Autowired
	CustomerRepo Respo;
	
	public Customer dsava(Customer c) {
		Customer c1 =  Respo.save(c);
		return c1;
	}
	
	public List<Customer> gData() {
		List<Customer> lst = Respo.findAll();
		return lst;
	}
	
	public Customer getById(int actno) {
		Customer c1 = Respo.findById(actno).orElse(null);
		return c1;
	}
	
	public void removeById(int actno) {
		Customer c1 = this.getById(actno);
		if (c1 != null) {
			Respo.deleteById(actno);
		}
	}
	
	public void updateById(int actno, double amt) {
		Customer c1 = this.getById(actno);
		if (c1 != null) {
			if (c1.getBalance() >= amt) {
				c1.setBalance(c1.getBalance() - amt);
				Respo.save(c1);
			} else {
				System.out.println("Low Balance");
			}
		} else {
			System.out.println("User Not Found");
		}
	}
	
	public List<Customer> gDataJPQL() {
		List<Customer> lst = Respo.gDataJPQL();
		return lst;
	}
	
	public Customer getByIdJPQL(int actno) {
		Customer c1 = Respo.getByIdJPQL(actno);
		return c1;
	}
	
	public void depositJPQL(int actno, double amt) {
        Customer c1 = Respo.getByIdJPQL(actno);
        if (c1 != null) {
            int rows = Respo.depositJPQL(actno, amt);
            if (rows > 0) {
                System.out.println("deposited");
            }
        } else {
            System.out.println("User Not Found");
        }
    }
	
	public void withdrawJPQL(int actno, double amt) {
        Customer c1 = Respo.getByIdJPQL(actno);
        if (c1 != null) {
            double currentBalance = c1.getBalance();
            if (currentBalance - amt >= 1000) {
                int rows = Respo.WithdrawJPQL(actno, amt);
                if (rows > 0) {
                    System.out.println("withdrawn");
                }
            } else {
                System.out.println("Cannot withdraw low balance");
            }
        } else {
            System.out.println("User Not Found.");
        }
    }
	
	public void deleteJPQL(int actno) {
		Customer c1 = this.getById(actno);
		if (c1 != null) {
			Respo.deleteJPQL(actno);
		}
	}
}