package com.hexaware.AnnotationEg2;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	AbstractApplicationContext con = new ClassPathXmlApplicationContext("beans.xml");
    	Book b =(Book)con.getBean("b1");
        System.out.println(b.toString());
        con.registerShutdownHook();
    }
}