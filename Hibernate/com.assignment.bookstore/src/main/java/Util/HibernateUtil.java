package Util;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import Model.Book;

public class HibernateUtil {
	private static SessionFactory sessionFactory;
	
	static {
		sessionFactory = new Configuration()
        		.configure("hiber.config.xml")
        		.addAnnotatedClass(Book.class)
        		.buildSessionFactory();
	}
	
	public static SessionFactory getSessionFactory() {
		return sessionFactory;
	}
}