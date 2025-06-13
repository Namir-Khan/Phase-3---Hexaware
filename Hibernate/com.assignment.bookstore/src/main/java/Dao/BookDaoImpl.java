package Dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import Model.Book;
import Util.HibernateUtil;

public class BookDaoImpl implements BookDao {
	SessionFactory factory;
	
	public BookDaoImpl() {
		factory = HibernateUtil.getSessionFactory();
	}

	public void addBook(Book b) {
		Session session = factory.openSession();
		Transaction txt = session.beginTransaction();
		
		session.save(b);
		txt.commit();
	}

	public void updatePrice(int bookId, double price) {
		Session session = factory.openSession();
		Transaction txt = session.beginTransaction();
		
		Query<Book> query = session.createQuery("update Book set price = :price where bookId = :bookId");
		query.setParameter("price", price);
		query.setParameter("bookId", bookId);
		
		int status = query.executeUpdate();
		txt.commit();
		
		if (status > 0) {
			System.out.println("Updated");
		} else {
			System.out.println("Not Found");
		}
	}

	public void removeBook(int bookId) {
		Session session = factory.openSession();
		Transaction txt = session.beginTransaction();
		
		Query<Book> query = session.createQuery("delete from Book where bookId = :bookId");
		query.setParameter("bookId", bookId);
		
		int status = query.executeUpdate();
		txt.commit();
		
		if (status > 0) {
			System.out.println("Removed");
		} else {
			System.out.println("Not Found");
		}
	}

	public void generateBill(int bookId, int quantity) {
		Session session = factory.openSession();
		Transaction txt = session.beginTransaction();
		
		Query<Book> query = session.createQuery("from Book where bookId = :bookId");
		query.setParameter("bookId", bookId);
		
		List<Book> books = query.list();
		Book book = books.get(0);
		
		if (book.getQuantity() < quantity) {
			System.out.println("Quantity is less");
		} else {
			System.out.println("BookID :" + bookId  + ", Title :" + book.getTitle() + ", Unit Price :" + book.getPrice() + ", Total Price : " + quantity*book.getPrice());
			Query<Book> query2 = session.createQuery("update Book set quantity = :quantity where bookId = :bookId");
			query2.setParameter("quantity", book.getQuantity() - quantity);
			query2.setParameter("bookId", bookId);
			query2.executeUpdate();
		}
		txt.commit();
	}

	public void searchBook(String title) {
		Session session = factory.openSession();
		Query<Book> query = session.createQuery("from Book where title = :title");
		query.setParameter("title", title);
		query.setFirstResult(0);
		query.setMaxResults(10);
		
		List<Book> books = query.list();
		for (Book book : books) {
			System.out.println(book.toString());
		}
	}
}