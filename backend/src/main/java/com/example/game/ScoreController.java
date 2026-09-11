package com.example.game;
import org.springframework.web.bind.annotation.*;import java.util.List;
@RestController @RequestMapping("/api") @CrossOrigin
public class ScoreController{
 private final ScoreRepository repo; public ScoreController(ScoreRepository r){repo=r;}
 @PostMapping("/scores") public Score save(@RequestBody Score s){return repo.save(s);}
 @GetMapping("/scores") public List<Score> all(){return repo.findTop10ByOrderByScoreDesc();}
}