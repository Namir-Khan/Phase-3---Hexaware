package Connection;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import Model.Student;

public class StudentConn {
	private static SessionFactory sessionFactory; // Single Object
	
	StudentConn() {
		sessionFactory = new Configuration()
        		.configure("hiber.config.xml")
        		.addAnnotatedClass(Student.class)
        		.buildSessionFactory();
	}
	
	public static SessionFactory getSessionFactory() {
		StudentConn studentConn = new StudentConn();
		return sessionFactory;
	}
}