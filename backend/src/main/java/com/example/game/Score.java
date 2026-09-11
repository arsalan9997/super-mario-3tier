package com.example.game;
import jakarta.persistence.*;
@Entity public class Score{
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
 private String playerName; private int score;
 public Score(){} public Long getId(){return id;} public String getPlayerName(){return playerName;}
 public void setPlayerName(String n){playerName=n;} public int getScore(){return score;} public void setScore(int s){score=s;}
}