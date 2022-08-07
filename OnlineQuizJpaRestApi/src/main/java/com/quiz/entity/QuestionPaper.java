package com.quiz.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="question_paper")
public class QuestionPaper {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="paperid")
	private Integer paperid;
	
	@Column(name="category")
	private String category;
	
	@Column(name="subcategory")
	private String subcategory;
	
	@Column(name="totalmarks")
	private Integer totalmarks;
	
	@Column(name="quizname")
	private String quizname;
	public QuestionPaper() {
	
	}

	
	public QuestionPaper(Integer paperid, String category, String subcategory, Integer totalmarks, String quizname) {
		super();
		this.paperid = paperid;
		this.category = category;
		this.subcategory = subcategory;
		this.totalmarks = totalmarks;
		this.quizname = quizname;
	}

	
	public String getQuizname() {
		return quizname;
	}


	public void setQuizname(String quizname) {
		this.quizname = quizname;
	}


	public Integer getPaperid() {
		return paperid;
	}

	public void setPaperid(Integer paperid) {
		this.paperid = paperid;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getSubcategory() {
		return subcategory;
	}

	public void setSubcategory(String subcategory) {
		this.subcategory = subcategory;
	}

	public Integer getTotalmarks() {
		return totalmarks;
	}

	public void setTotalmarks(Integer totalmarks) {
		this.totalmarks = totalmarks;
	}


	@Override
	public String toString() {
		return "QuestionPaper [paperid=" + paperid + ", category=" + category + ", subcategory=" + subcategory
				+ ", totalmarks=" + totalmarks + ", quizname=" + quizname + "]";
	}

	

	
	
	
	
}
