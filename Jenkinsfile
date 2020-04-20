pipeline {
  
  agent any

  triggers {
    pollSCM('*/5   * 1-5')
  }

  stages {

    stage ("Code pull"){
      steps{
          checkout scm
      }
    }

    stage('Build') {
      steps {
          bat 'npm install'
      }
    }
  }
}