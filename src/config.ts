import dotenv from 'dotenv';
dotenv.config();


export default {
  MONGO_DATABASE: process.env.MONGO_DB,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_HOST: process.env.MONGO_HOST,
  JWT_SECRET: process.env.JWT_SECRET
}