pipeline {
    agent any

    options {
      timeout(time: 2,  unit:  'MINUTES')    
    }	

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Fernando608/automatizacion-puppeteer.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }
        stage('Ejecutar pruebas') {
            steps {
                sh 'npm test'
            }
        }
    }
}