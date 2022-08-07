package com.quiz.entity;



import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Id;

@Embeddable
public class QuestionsPrimaryData implements Serializable {
    
	@Column(name="paperid")
	private Integer paperid;
	
	@Column(name="question_no")
	private Integer question_no;

	public QuestionsPrimaryData() {
		super();
	}

	public QuestionsPrimaryData(Integer paperid, Integer question_no) {
		super();
		this.paperid = paperid;
		this.question_no = question_no;
	}

	public Integer getPaperid() {
		return paperid;
	}

	public void setPaperid(Integer paperid) {
		this.paperid = paperid;
	}

	public Integer getQuestionno() {
		return question_no;
	}

	public void setQuestionno(Integer question_no) {
		this.question_no = question_no;
	}

	@Override
	public String toString() {
		return "QuestionsPrimaryData [paperid=" + paperid + ", questionno=" + question_no + "]";
	}

	
	
	
}
