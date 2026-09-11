# Super Adventure — 3 Tier DevOps Project

A playable Mario-style browser game (original graphics) with:
1. Presentation tier: HTML/CSS/JavaScript + Nginx
2. Application tier: Java 17 + Spring Boot REST API
3. Data tier: MySQL

## Local test
Install Docker and run:
docker compose up -d --build
Open http://localhost

## AWS DevOps target
GitHub -> Jenkins -> Docker -> AWS EC2.
For a production 3-tier setup, frontend/backend can be separated into EC2/ECS and MySQL moved to Amazon RDS.

## Important
This project is "Mario-style" and uses original simple canvas graphics; it is not an official Nintendo/Mario game.
