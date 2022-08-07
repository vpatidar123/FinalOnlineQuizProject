package com.quiz.entity;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Questions {
	@EmbeddedId
	private QuestionsPrimaryData questionsprimarydata;
	
	@Column(name="question")
	private String question;
	
	@Column(name="option_a")
	private String optiona;
	
	@Column(name="option_b")
	private String optionb;
	
	@Column(name="option_c")
	private String optionc;
	
	@Column(name="option_d")
	private String optiond;
	
	@Column(name="correct_option")
	private String correctoption;

	public Questions() {
		
	}

	public Questions(QuestionsPrimaryData questionsprimarydata, String question, String optiona, String optionb,
			String optionc, String optiond, String correctoption) {
		super();
		this.questionsprimarydata = questionsprimarydata;
		this.question = question;
		this.optiona = optiona;
		this.optionb = optionb;
		this.optionc = optionc;
		this.optiond = optiond;
		this.correctoption = correctoption;
	}

	public QuestionsPrimaryData getQuestionsprimarydata() {
		return questionsprimarydata;
	}

	public void setQuestionsprimarydata(QuestionsPrimaryData questionsprimarydata) {
		this.questionsprimarydata = questionsprimarydata;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getOptiona() {
		return optiona;
	}

	public void setOptiona(String optiona) {
		this.optiona = optiona;
	}

	public String getOptionb() {
		return optionb;
	}

	public void setOptionb(String optionb) {
		this.optionb = optionb;
	}

	public String getOptionc() {
		return optionc;
	}

	public void setOptionc(String optionc) {
		this.optionc = optionc;
	}

	public String getOptiond() {
		return optiond;
	}

	public void setOptiond(String optiond) {
		this.optiond = optiond;
	}

	public String getCorrectoption() {
		return correctoption;
	}

	public void setCorrectoption(String correctoption) {
		this.correctoption = correctoption;
	}

	@Override
	public String toString() {
		return "Questions [questionsprimarydata=" + questionsprimarydata + ", question=" + question + ", optiona="
				+ optiona + ", optionb=" + optionb + ", optionc=" + optionc + ", optiond=" + optiond
				+ ", correctoption=" + correctoption + "]";
	}

	
	
	
}
