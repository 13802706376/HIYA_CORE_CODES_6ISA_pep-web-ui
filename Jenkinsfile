#!/usr/bin/env groovy
@Library('common-library')

//定义包ID, name和路径
def APPS = [
    ['pep-web-ui','pep-web-ui', 'target/pep-web-ui-*.zip']
]

//定义构建的参数
def buildMapParams=[:]
//构建pom所在目录
buildMapParams.pomDir='./'
buildMapParams.type='front'
buildMapParams.mvnCommand = 'npm run build'

pipeline {
    agent any
    
    tools {
        nodejs 'nodejs'
    }    

    
    stages {
        stage('安装依赖'){
            steps {
                sh 'npm i'
            }
        }

        stage('枚举构建快照'){
            steps {
                sh 'uname -a > "./snapshot.info" '
                sh 'node -v >> "./snapshot.info" '
                sh 'npm -v >> "./snapshot.info" '
                sh 'npm list --depth=0 >> "./snapshot.info" '
                sh 'webpack -v >> "./snapshot.info" '
            }
        }
        stage('构建') {
            steps {
                commonBuildTest(buildMapParams)
            }   
        }
        stage('打包和上传') {
            steps{
                packageAndUpload(APPS)
            }           
        }
    }

    
}