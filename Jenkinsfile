pipeline {
    agent { docker { image 'node:6.44' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
