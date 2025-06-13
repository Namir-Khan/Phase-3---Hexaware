package Service;

import java.util.Scanner;

import Dao.StudentDao;
import Model.Student;

public class StudentService {
	Student s;
	StudentDao dao;
	Scanner sc;
	
	public StudentService() {
		s = new Student();
		sc = new Scanner(System.in);
		dao = new StudentDao();
	}
	
	public void saveStudent() {
		System.out.print("Enter Roll Number :");
		s.setRollno(sc.nextInt());
		sc.nextLine();
		
		System.out.print("Enter Name :");
		s.setName(sc.nextLine());
		
		System.out.print("Enter Marks :");
		s.setMarks(sc.nextDouble());
		sc.nextLine();
		
		dao.saveData(s);
	}
	
	public void removeData()  {
		System.out.print("Enter Roll no :");
		int rollno = sc.nextInt();
		sc.nextLine();
		
		dao.removeData(rollno);
	}
	
	public void updateData() {
		System.out.print("Enter Roll no to update :");
		int rollno = sc.nextInt();
		sc.nextLine();
		
		System.out.print("Enter updated Name :");
		String name = sc.nextLine();
		
		System.out.print("Enter updated Marks :");
		double marks = sc.nextInt();
		sc.nextLine();
		
		dao.updateData(rollno, name, marks);
	}
	
	public void searchData() {
		System.out.print("Enter Roll :");
		int rollno = sc.nextInt();
		sc.nextLine();
		
		Student s = dao.searchData(rollno);
		if (s != null) {
			System.out.println("Student :- Roll :" + rollno + ", Name :" + s.getName() + ", Marks :" + s.getMarks());
		} else {
			System.out.println("Roll number '" + rollno + "' not found");
		}
	}
	
	public void showData() {
		dao.showData();
	}
	
	public void searchByName() {
		System.out.print("Enter Name :");
		String name = sc.nextLine();
		
		dao.searchByName(name);
	}
	
	public void searchByNameMarks() {
		System.out.print("Enter Name :");
		String name = sc.nextLine();
		
		System.out.print("Enter Marks :");
		double marks = sc.nextDouble();
		sc.nextLine();
		
		dao.searchByNameMarks(name, marks);
	}
	
	public void filterByMarks() {
		System.out.print("Enter Marks :");
		double marks = sc.nextDouble();
		sc.nextLine();
		
		dao.filterByMarks(marks);
	}
	
	public void deleteByRoll() {
		System.out.print("Enter Roll :");
		int rollno = sc.nextInt();
		sc.nextLine();
		
		dao.deleteByRoll(rollno);
	}
	
	public void updateByQuery() {
		System.out.print("Enter Roll no to update :");
		int rollno = sc.nextInt();
		sc.nextLine();
		
		System.out.print("Enter updated Name :");
		String name = sc.nextLine();
		
		System.out.print("Enter updated Marks :");
		double marks = sc.nextInt();
		sc.nextLine();
		
		dao.updateByQuery(rollno, name, marks);
	}
	
	public void showDataN() {
		dao.showDataN();
	}
	
	public void removeDataN()  {
		System.out.print("Enter Roll no :");
		int rollno = sc.nextInt();
		sc.nextLine();
		
		dao.removeData(rollno);
	}
	
	public void showDataNamedQuery() {
		dao.showDataNamedQuery();
	}
	
	public void removeDataNamedQuery() {
		System.out.print("Enter Roll no :");
		int rollno = sc.nextInt();
		sc.nextLine();
		
		dao.removeDataNamedQuery(rollno);
	}
	
	public void filterByNameNamedQuery() {
		System.out.print("Enter Name :");
		String name = sc.nextLine();
		
		dao.filterByNameNamedQuery(name);
	}
}