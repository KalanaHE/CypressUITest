pipeline {
    agent any
tools {nodejs "Node14"}

   environment {
       CHROME_BIN = '/bin/google-chrome'
      
   }
    stages {
        stage('Dependacies') {
            steps {
                sh 'npm i'
            }
        }
    }
}
