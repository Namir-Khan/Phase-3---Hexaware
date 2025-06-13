package com.hibernate.map.com.hibernateMapping;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Book {
	@Id
	int b_id;
	String name;
	String genre;
	
	public Book() {
		
	}

	public Book(int b_id, String name, String genre) {
		super();
		this.b_id = b_id;
		this.name = name;
		this.genre = genre;
	}

	public int getB_id() {
		return b_id;
	}

	public void setB_id(int b_id) {
		this.b_id = b_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	@Override
	public String toString() {
		return "Book [b_id=" + b_id + ", name=" + name + ", genre=" + genre + "]";
	}
}