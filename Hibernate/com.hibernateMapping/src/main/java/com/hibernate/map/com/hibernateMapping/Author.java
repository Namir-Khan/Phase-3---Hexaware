package com.hibernate.map.com.hibernateMapping;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Author {
	@Id
	int a_id;
	String name;
	
	@OneToMany(targetEntity = Book.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	List<Book> booklist;
	
	public Author() {
		
	}

	public Author(int a_id, String name, List<Book> booklist) {
		super();
		this.a_id = a_id;
		this.name = name;
		this.booklist = booklist;
	}

	public int getA_id() {
		return a_id;
	}

	public void setA_id(int a_id) {
		this.a_id = a_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Author [a_id=" + a_id + ", name=" + name + "]";
	}
}