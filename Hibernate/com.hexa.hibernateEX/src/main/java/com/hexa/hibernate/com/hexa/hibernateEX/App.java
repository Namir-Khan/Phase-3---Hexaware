package com.hexa.hibernate.com.hexa.hibernateEX;

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
        
        sessionFactory = new Configuration()
        		.configure("hiber.config.xml")
        		.addAnnotatedClass(Student.class)
        		.buildSessionFactory();
        
        session = sessionFactory.openSession();
        
        Transaction txTransaction= session.beginTransaction();
    	
        int rollno = 104;
    	
    	Student r = session.find(Student.class, rollno);
    	if (r != null) {
    		r.setRollno(104);
        	r.setName("Mayuuuh");
        	r.setMarks(2000);
    	} else {
    		System.out.println("Not Found");
    	}
    	
    	txTransaction.commit();
    }
}