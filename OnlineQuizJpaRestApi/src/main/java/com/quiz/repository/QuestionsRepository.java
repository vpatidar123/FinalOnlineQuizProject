package com.quiz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.quiz.entity.Questions;
import com.quiz.entity.QuestionsPrimaryData;

@RepositoryRestResource(path="questions")
@CrossOrigin("http://localhost:4200/")
public interface QuestionsRepository extends JpaRepository<Questions, QuestionsPrimaryData>{
	
	@Query("select s from Questions s where paperid = ?1")
	public List<Questions> findBypaperid(Integer paperid);
}
