package com.quiz.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="scorecard")
public class ScoreCard {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	
	@Column(name="paperid")
	private Integer paperid;
	
	@Column(name="emailid")
	private String emailid;
	
	@Column(name="marks")
	private Integer marks;
	
	@Column(name="totalmarks")
	private Integer totalmarks;
	
	@Column(name="testdate")
	private String testdate;

	@Column(name="quizname")
	private String quizname;

	public ScoreCard() {
	
	}
	
	
	


	public ScoreCard(Integer id, Integer paperid, String emailid, Integer marks, Integer totalmarks, String testdate,
			String quizname) {
		super();
		this.id = id;
		this.paperid = paperid;
		this.emailid = emailid;
		this.marks = marks;
		this.totalmarks = totalmarks;
		this.testdate = testdate;
		this.quizname = quizname;
	}


	


	public String getQuizname() {
		return quizname;
	}





	public void setQuizname(String quizname) {
		this.quizname = quizname;
	}





	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getPaperid() {
		return paperid;
	}

	public void setPaperid(Integer paperid) {
		this.paperid = paperid;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public Integer getMarks() {
		return marks;
	}

	public void setMarks(Integer marks) {
		this.marks = marks;
	}

	public Integer getTotalmarks() {
		return totalmarks;
	}

	public void setTotalmarks(Integer totalmarks) {
		this.totalmarks = totalmarks;
	}

	public String getTestdate() {
		return testdate;
	}

	public void setTestdate(String testdate) {
		this.testdate = testdate;
	}





	@Override
	public String toString() {
		return "ScoreCard [id=" + id + ", paperid=" + paperid + ", emailid=" + emailid + ", marks=" + marks
				+ ", totalmarks=" + totalmarks + ", testdate=" + testdate + ", quizname=" + quizname + "]";
	}

	
}
