pipeline {
 agent any
 stages {
  stage('Checkout'){steps{checkout scm}}
  stage('Build & Deploy'){steps{sh 'docker compose up -d --build'}}
  stage('Smoke Test'){steps{sh 'sleep 10; curl -f http://localhost/'}}
 }
 post { always {sh 'docker compose ps || true'}}
}