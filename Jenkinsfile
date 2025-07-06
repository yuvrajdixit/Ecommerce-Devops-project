pipeline {
    agent any

    environment {
        IMAGE_NAME = "your_dockerhub_username/vite-react-app"
        CONTAINER_NAME = "vite-react-app"
        SERVER_IP = "your_ec2_public_ip"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:latest")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'dockerhub-creds', url: '']) {
                    script {
                        docker.image("${IMAGE_NAME}:latest").push()
                    }
                }
            }
        }

        stage('Deploy on EC2') {
            steps {
                sshagent(['ec2-ssh-key']) {
                    sh """
                    ssh -o StrictHostKeyChecking=no ec2-user@${SERVER_IP} '
                        docker pull ${IMAGE_NAME}:latest &&
                        docker stop ${CONTAINER_NAME} || true &&
                        docker rm ${CONTAINER_NAME} || true &&
                        docker run -d --name ${CONTAINER_NAME} -p 80:80 ${IMAGE_NAME}:latest
                    '
                    """
                }
            }
        }
    }
}
