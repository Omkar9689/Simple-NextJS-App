pipeline{
    agent any

    environment {
        VERCEL_TOKEN = credentials('vercel_token')
    }

    stages{
        stage('Install'){
            steps{
                bat 'npm install'
            }
        }

        stage('Test'){
            steps{
                echo 'Skipping Testing'
            }
        }

        stage('Build'){
            steps{
                bat 'npm run build'
            }
        }

        stage('Deploy'){
            steps{
                bat 'npx vercel --prod --yes --name nextjs-app --token=%VERCEL_TOKEN%'
            }
        }
    }    
}