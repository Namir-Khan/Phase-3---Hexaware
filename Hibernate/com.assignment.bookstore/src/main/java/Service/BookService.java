package Service;

import java.util.Scanner;

import Dao.BookDaoImpl;
import Model.Book;

public class BookService {
	Book b;
	BookDaoImpl dao;
	Scanner sc;
	
	public BookService() {
		b = new Book();
		dao = new BookDaoImpl();
		sc = new Scanner(System.in);
	}
	
	public void addBook() {
		System.out.print("Enter Book Id :");
		b.setBookId(sc.nextInt());
		sc.nextLine();
		
		System.out.print("Enter Title :");
		b.setTitle(sc.nextLine());
		
		System.out.print("Enter Author :");
		b.setAuthor(sc.nextLine());
		
		System.out.print("Enter Price :");
		b.setPrice(sc.nextDouble());
		sc.nextLine();
		
		System.out.print("Enter Quantity :");
		b.setQuantity(sc.nextInt());
		sc.nextLine();
		
		dao.addBook(b);
	}
	
	public void updatePrice() {
		System.out.print("Enter Book Id :");
		int bookId = sc.nextInt();
		sc.nextLine();
		
		System.out.print("Enter Price :");
		double price = sc.nextDouble();
		sc.nextLine();
		
		dao.updatePrice(bookId, price);
	}
	
	public void removeBook() {
		System.out.print("Enter Book Id :");
		int bookId = sc.nextInt();
		sc.nextLine();
		
		dao.removeBook(bookId);
	}
	
	public void searchBook() {
		System.out.print("Enter Book Title :");
		String title = sc.nextLine();
		
		dao.searchBook(title);
	}
	
	public void generateBill() {
		System.out.print("Enter Book Id :");
		int bookId = sc.nextInt();
		sc.nextLine();
		
		System.out.print("Enter Book Quantity :");
		int quantity = sc.nextInt();
		sc.nextLine();
		
		dao.generateBill(bookId, quantity);
	}
}