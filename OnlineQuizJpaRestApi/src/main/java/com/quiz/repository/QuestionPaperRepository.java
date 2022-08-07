package com.quiz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.quiz.entity.QuestionPaper;
import com.quiz.entity.Questions;

@RepositoryRestResource(path="questionPaper")
@CrossOrigin("http://localhost:4200/")
public interface QuestionPaperRepository extends JpaRepository<QuestionPaper, Integer>{
	
	public List<QuestionPaper> findByPaperid(Integer paperid);
	public List<QuestionPaper> findByCategoryContainsAllIgnoreCase(String category);
	public List<QuestionPaper> findBySubcategoryContainsAllIgnoreCase(String subcategory);
}
