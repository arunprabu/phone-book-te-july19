pipeline {
  
  agent any

  stages {

    stage ("Code pull"){
      steps{
        checkout scm
      }
    }

    stage('Build') {
      steps {
        npm install
      }
    }
  }
}