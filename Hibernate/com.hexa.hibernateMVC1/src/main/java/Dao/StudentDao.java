package Dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.NativeQuery;
import org.hibernate.query.Query;

import Connection.StudentConn;
import Model.Student;

public class StudentDao implements DaoStudentI {
	
	SessionFactory factory;
	
	public StudentDao() {
		factory = StudentConn.getSessionFactory();
	}

	public void saveData(Student s) {
		Session session = factory.openSession();
		Transaction txt = session.beginTransaction();
		
		session.save(s);
		txt.commit();
	}

	public void removeData(int rollno) {
		Session session = factory.openSession();
		Transaction txt = session.beginTransaction();
		
		Student s = session.find(Student.class, rollno);
		if (s != null) {
			session.delete(s);
		} else {
			System.out.println("Roll number '" + rollno + "' not found");
		}
		
		txt.commit();
	}

	public void updateData(int rollno, String name, double marks) {
		Session session = factory.openSession();
		Transaction txt = session.beginTransaction();
		
		Student s = session.find(Student.class, rollno);
		if (s != null) {
			s.setName(name);
			s.setMarks(marks);
		} else {
			System.out.println("Roll number '" + rollno + "' not found");
		}
		
		txt.commit();
	}

	public Student searchData(int rollno) {
		Session session = factory.openSession();
		Transaction txt = session.beginTransaction();
		Student s = session.find(Student.class, rollno);
		txt.commit();
		return s;
	}
	
	public void showData() {
		Session session = factory.openSession();
		Query<Student> query = session.createQuery("from Student");
		query.setFirstResult(0);
		query.setMaxResults(10);
		
		List<Student> students = query.list();
		for (Student student : students) {
			System.out.println(student.toString());
		}
	}

	public void searchByName(String name) {
		Session session = factory.openSession();
		Query<Student> query = session.createQuery("from Student where name = :name", Student.class);
		query.setParameter("name", name);
		
		List<Student> students = query.list();
		for (Student student : students) {
			System.out.println(student.toString());
		}
	}

	public void searchByNameMarks(String name, double marks) {
		Session session = factory.openSession();
		Query<Student> Q = session.createQuery("from Student where name=:name and marks=:marks", Student.class);
		Q.setParameter("name", name);
		Q.setParameter("marks", marks);

		List<Student> usersList = Q.list();
		for (Student u : usersList) {
			System.out.println(u.toString());
		}
	}

	public void filterByMarks(double marks) {
		Session session = factory.openSession();
		Query<Student> query = session.createQuery("from Student where marks > :marks", Student.class);
		query.setParameter("marks", marks);
		
		List<Student> filterMarks = query.list();
		filterMarks.stream().forEach((m) -> System.out.println(m.toString()));
	}

	public void deleteByRoll(int rollno) {
		Session session = factory.openSession();
		Transaction txt = session.beginTransaction();
		
		Query<Student> query = session.createQuery("delete from Student where rollno = :rollno");
		query.setParameter("rollno", rollno);
		
		int status = query.executeUpdate();
		txt.commit();
		
		if (status > 0) {
			System.out.println("Removed");
		} else {
			System.out.println("Not Found");
		}
	}

	public void updateByQuery(int rollno, String name, double marks) {
		Session session = factory.openSession();
		Transaction txt = session.beginTransaction();
		
		Query<Student> query = session.createQuery("update Student set name=:name, marks=:marks where rollno=:rollno");
		query.setParameter("name", name);
		query.setParameter("marks", marks);
		query.setParameter("rollno", rollno);
		
		int status = query.executeUpdate();
		txt.commit();
		
		if (status > 0) {
			System.out.println("Updated");
		} else {
			System.out.println("Not Found");
		}
	}
	
	public void showDataN() {
		Session session = factory.openSession();
		NativeQuery<Student> query = session.createNativeQuery("select * from Student", Student.class);

		List<Student> students=	 query.list();
		 
		for(Student s : students )	
		{
			System.out.println(s.toString());
			
		}
	}

	public void removeDataN(int rollno) {
		Session session = factory.openSession();
		Transaction txt = session.beginTransaction();
		NativeQuery<Student> query = session.createNativeQuery("delete from Student where rollno = :rollno");
		query.setParameter("rollno", rollno);
		
		int status = query.executeUpdate();
		txt.commit();
		
		if (status > 0) {
			System.out.println("Removed");
		} else {
			System.out.println("Not Found");
		}
	}
	
	public void updateByN(int rollno, String name, double marks) {
		Session session = factory.openSession();
		Transaction txt = session.beginTransaction();
		
		NativeQuery<Student> query = session.createNativeQuery("update Student set name=:name, marks=:marks where rollno=:rollno");
		query.setParameter("name", name);
		query.setParameter("marks", marks);
		query.setParameter("rollno", rollno);
		
		int status = query.executeUpdate();
		txt.commit();
		
		if (status > 0) {
			System.out.println("Updated");
		} else {
			System.out.println("Not Found");
		}
	}

	public void showDataNamedQuery() {
		Session session = factory.openSession();
		Query<Student> query = session.createNamedQuery("Student.showDataNamedQuery", Student.class);

		List<Student> students=	 query.list();
		 
		for(Student s : students )	
		{
			System.out.println(s.toString());
			
		}
	}
	
	public void removeDataNamedQuery(int rollno) {
		Session session = factory.openSession();
		Transaction txt = session.beginTransaction();
		Query<Student> query = session.createNamedQuery("Student.removeDataNamedQuery");
		query.setParameter("rollno", rollno);
		
		int status = query.executeUpdate();
		txt.commit();
		
		if (status > 0) {
			System.out.println("Removed");
		} else {
			System.out.println("Not Found");
		}
	}
	
	public void filterByNameNamedQuery(String name) {
		Session session = factory.openSession();
		Query<Student> query = session.createNamedQuery("Student.filterByNameNamedQuery", Student.class);
		query.setParameter("name", name);

		List<Student> students = query.list();
		 
		for(Student s : students )	
		{
			System.out.println(s.toString());
			
		}
	}
}