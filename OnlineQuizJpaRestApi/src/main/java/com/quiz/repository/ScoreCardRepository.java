package com.quiz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.quiz.entity.ScoreCard;

@RepositoryRestResource(path="scorecard")
@CrossOrigin("http://localhost:4200/")
public interface ScoreCardRepository extends JpaRepository<ScoreCard, Integer>{
	
	@Query("select s from ScoreCard s where emailid = ?1 order by marks desc")
	public List<ScoreCard> findByEmailidContainsAllIgnoreCase(String emailid);
	
	@Query("select s from ScoreCard s where paperid = ?1 order by marks desc")
	public List<ScoreCard> findByPaperid(Integer paperid);
	
	@Query("select s from ScoreCard s where s.paperid = ?1 and s.emailid = ?2 ")
	public List<ScoreCard> findByPaperidAndEmailId(Integer paperid,String emailid);
	
	
	public List<ScoreCard> findByEmailidAndQuiznameContainsAllIgnoreCase(String emailid,String quizname);
}
