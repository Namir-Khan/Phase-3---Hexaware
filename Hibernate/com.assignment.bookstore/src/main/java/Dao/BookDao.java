package Dao;

import Model.Book;

public interface BookDao {
	public void addBook(Book b);
	public void updatePrice(int bookId, double price);
	public void removeBook(int bookId);
	public void generateBill(int bookId, int quantity);
	public void searchBook(String title);
}