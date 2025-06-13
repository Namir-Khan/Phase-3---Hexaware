package com.hibernate.map.com.hibernateMapping;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Address {
	@Id
	int addressId;
	String city;
	
	public Address() {
		
	}

	public Address(int addressId, String city) {
		super();
		this.addressId = addressId;
		this.city = city;
	}

	public int getAddressId() {
		return addressId;
	}

	public void setAddressId(int addressId) {
		this.addressId = addressId;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	@Override
	public String toString() {
		return "Address [addressId=" + addressId + ", city=" + city + "]";
	}
}