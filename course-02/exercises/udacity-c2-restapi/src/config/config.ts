import dotenv from 'dotenv'
require('dotenv').config({path: '.env'})
export const config = {
  "dev": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "postgres",
    "aws_region": "us-east-2",
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket":process.env.AWS_MEDIA_BUCKET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
"jwt":{
    "secret": process.env.JWT_SECRET
}
}
