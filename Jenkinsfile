pipeline {
    agent { docker { image 'node:6.5' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
