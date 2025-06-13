package com.hibernate.map.com.hibernateMapping;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	SessionFactory sessionFactory;
        Session session;
        
//        sessionFactory = new Configuration()
//        		.configure("hiber.config.xml")
//        		.addAnnotatedClass(Student.class)
//        		.addAnnotatedClass(Address.class)
//        		.buildSessionFactory();
        
//        session = sessionFactory.openSession();
//        Transaction txt = session.beginTransaction();
        
//        Address a1 = new Address(1, "Pune");
//        Student s1 = new Student(101, "Namir", 1000.0, a1);
        
//        session.save(a1); Instead add cascade property in entity.
//        session.save(s1);
        
//        ----------------------------------------------------------------
        
//        sessionFactory = new Configuration()
//        		.configure("hiber.config.xml")
//        		.addAnnotatedClass(Employee.class)
//        		.addAnnotatedClass(Department.class)
//        		.buildSessionFactory();
//        
//        session = sessionFactory.openSession();
//        Transaction txt = session.beginTransaction();
//        
//        Employee e1 = new Employee(101, "Parth", 2000.0);
//        Employee e2 = new Employee(102, "Mayuush", 1000.0);
//        
//        List<Employee> list = new ArrayList<Employee>();
//        list.add(e1);
//        list.add(e2);
//        
//        Department d1 = new Department(201, "FSD", list);
//        
//        session.save(d1);
//        
//        txt.commit();
        
//        ---------------------------------------------------------------------
        
//        sessionFactory = new Configuration()
//        		.configure("hiber.config.xml")
//        		.addAnnotatedClass(Author.class)
//        		.addAnnotatedClass(Book.class)
//        		.buildSessionFactory();
//        
//        session = sessionFactory.openSession();
//        Transaction txt = session.beginTransaction();
//        
//        Book b1 = new Book(101, "GOT", "Dragons");
//        Book b2 = new Book(102, "Harry Potter", "Magic");
//        
//        List<Book> list = new ArrayList<Book>();
//        list.add(b1);
//        list.add(b2);
//        
//        Author a1 = new Author(201, "Namir", list);
//        
//        session.save(a1);
//        
//        txt.commit();
        
//      ---------------------------------------------------------------------
        
        sessionFactory = new Configuration()
        		.configure("hiber.config.xml")
        		.addAnnotatedClass(Employee.class)
        		.addAnnotatedClass(Department.class)
        		.buildSessionFactory();
        
        session = sessionFactory.openSession();
        
        Department d = session.get(Department.class, 201);
        System.out.print(d.getdName());
        System.out.print(d.getEmplist());
    }
}