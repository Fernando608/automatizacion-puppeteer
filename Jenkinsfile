pipeline {
    agent any

    options {
      timeout(time: 2,  unit:  'MINUTES')    
    }	

    stages {

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
        stage('Publicar resultados (opcional)') {
            steps {
                echo 'Resultados de las pruebas disponibles en la consola'
            }
        }
    }
}