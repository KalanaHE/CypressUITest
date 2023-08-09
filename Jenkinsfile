pipeline {
    agent any
    tools {nodejs "Node14"}

   environment {
       CHROME_BIN = '/bin/google-chrome'
      
   }
    stages {
        stage('Dependacies') {
            steps {
                bat 'npm i'
            }
        }
        stage('Testing') {
            steps {
                bat 'npm run test:cli'
            }
        }
        stage('Test Report') {
            steps {
                bat 'npm run create:html:report'
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/TestReport', reportFiles: 'cypress-combined-report.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
    
}
