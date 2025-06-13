package com.assignment.bookstore.com.assignment.bookstore;

import java.util.Scanner;

import Service.BookService;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	BookService service = new BookService();
        Scanner sc = new Scanner(System.in);
        int ch;

        do {
            System.out.println("\n----- Book System ---");
            System.out.println("1. Add, 2. Update, 3. Remove, 4. Search, 5. Generate Bill, 6. Exit");
            System.out.print("Enter your choice: ");
            ch = sc.nextInt();
            sc.nextLine();

            switch (ch) {
                case 1:
                    service.addBook();
                    break;
                case 2:
                    service.updatePrice();
                    break;
                case 3:
                    service.removeBook();
                    break;
                case 4:
                    service.searchBook();
                    break;
                case 5:
                    service.generateBill();
                    break;
                case 6:
                    System.out.println("Exit....");
                    break;
                default:
                    System.out.println("Invalid choice");
            }
        } while (ch != 6);

        sc.close();
    }
}