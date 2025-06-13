package Dao;

import Model.Student;

public interface DaoStudentI {
	public void saveData(Student s);
	public void removeData(int rollno);
	public void updateData(int rollno, String name, double marks);
	public Student searchData(int rollno);
	public void showData();
	public void searchByName(String name);
	public void searchByNameMarks(String name, double marks);
	public void filterByMarks(double marks);
	public void deleteByRoll(int rollno);
	public void updateByQuery(int rollno, String name, double marks);
	
	public void showDataN();
	public void removeDataN(int rollno);
	public void updateByN(int rollno, String name, double marks);
	
	public void showDataNamedQuery();
	public void removeDataNamedQuery(int rollno);
	public void filterByNameNamedQuery(String name);
}