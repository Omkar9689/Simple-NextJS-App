pipeline{
    agent any

    environtment {
        VERCEL_TOKEN = credentialS('vercel_token')
    }

    stages{
        stage('Install'){
            steps{
                bat 'npm install'
            }
        }

        stage('Test'){
            steps{
                bat 'Skipping Testing'
            }
        }

        stage('Build'){
            steps{
                bat 'npm run build'
            }
        }

        stage('Deploy'){
            steps{
                bat 'npx vercel --prod --yes --token=%VERCEL_TOKEN%'
            }
        }
    }    
}