package com.hexaware.SpringEg;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	ApplicationContext conn = new ClassPathXmlApplicationContext("beans.xml");
    	  
    	Student s1=(Student)conn.getBean("s1");
    	System.out.println(s1.toString());
    	
    	Address a = s1.getAddress();
    	System.out.println(a.toString());
    }
}
