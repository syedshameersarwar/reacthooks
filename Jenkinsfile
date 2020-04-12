pipeline {
    agent { docker { image 'node:6.7' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
