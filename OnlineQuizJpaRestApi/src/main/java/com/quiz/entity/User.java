package com.quiz.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {

	@Id		// primary key
	@Column(name="emailid")
	private String emailid;
	
	@Column(name="password")
	private String password;
	
	@Column(name="name")
	private String name;
	
	@Column(name="role")
	private String role;

	public User() {
		
	}

	public User(String emailid, String password, String name, String role) {
		super();
		this.emailid = emailid;
		this.password = password;
		this.name = name;
		this.role = role;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "User [emailid=" + emailid + ", password=" + password + ", name=" + name + ", role=" + role + "]";
	}

	

	
	
}
