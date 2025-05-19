pipeline {
    agent any

    options {
      timeout(time: 5,  unit:  'MINUTES')    
    }	

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Fernando608/automatizacion-puppeteer.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }
        stage('Ejecutar pruebas') {
            steps {
                bat 'npm test'
            }
        }
    }
}