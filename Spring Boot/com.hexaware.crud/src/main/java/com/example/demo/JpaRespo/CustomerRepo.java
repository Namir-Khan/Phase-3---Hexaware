package com.example.demo.JpaRespo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.Entity.Customer;

@Repository
public interface CustomerRepo extends JpaRepository<Customer, Integer> {
	@Query("select c from Customer c")
	public List<Customer> gDataJPQL();
	
	@Query("select c from Customer c where c.actno=:actno")
	public Customer	getByIdJPQL(@Param("actno") int actno);
	
	@Query("select c from Customer c where c.name=:name")
	public Customer	getByNameJPQL(@Param("name") String name);
	
	@Transactional
	@Modifying
	@Query("update Customer c set c.Balance = c.Balance + :amt  where c.actno = :actno")
	public int depositJPQL(@Param("actno") int actno, @Param("amt") double amt);
	
	@Transactional
	@Modifying
	@Query("update Customer c set c.Balance = c.Balance - :amt where c.actno = :actno")
	public int WithdrawJPQL(@Param("actno") int actno, @Param("amt") double amt);
	
	@Transactional
	@Modifying
	@Query("delete Customer c where c.actno=:actno ")
	public int deleteJPQL(@Param("actno") int actno);
	
	
//	Native Query
	
	
	@Query(value = "SELECT * FROm customer", nativeQuery = true)
	public List<Customer> getUserN();
	
	@Query(value = "SELECT * FROM customer WHERE actno = :actno", nativeQuery = true)
	public Customer getByIdN(@Param("actno") int actno);

	@Query(value = "SELECT * FROM customer WHERE name = :name", nativeQuery = true)
	public Customer getByNameN(@Param("name") String name);

	@Transactional
	@Modifying
	@Query(value = "UPDATE customer SET Balance = Balance + :amt WHERE actno = :actno", nativeQuery = true)
	public int depositN(@Param("actno") int actno, @Param("amt") double amt);

	@Transactional
	@Modifying
	@Query(value = "UPDATE customer SET Balance = Balance - :amt WHERE actno = :actno", nativeQuery = true)
	public int withdrawN(@Param("actno") int actno, @Param("amt") double amt);

	@Transactional
	@Modifying
	@Query(value = "DELETE FROM customer WHERE actno = :actno", nativeQuery = true)
	public int deleteN(@Param("actno") int actno);
}