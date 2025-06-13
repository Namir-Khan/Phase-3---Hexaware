package com.hexa.hibernateMVC.com.hexa.hibernateMVC1;

import Service.StudentService;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        StudentService service = new StudentService();
//        service.saveStudent();
//        service.removeData();
//        service.updateData();
//        service.searchData();
//        service.showData();
        
        
//        service.searchByName();
//        service.searchByNameMarks();
//        service.filterByMarks();
//        service.deleteByRoll();
//        service.updateByQuery();
        
//        service.showDataN();
//        service.removeDataN();
        
//        service.showDataNamedQuery();
//        service.removeDataNamedQuery();
        service.filterByNameNamedQuery();
    }
}