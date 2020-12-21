import mongoose from 'mongoose';
import config from './config';

(async () => {
  try {
    const db = await mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.igyrh.mongodb.net/${config.MONGO_DATABASE}?retryWrites=true&w=majority`,{
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: true,
      useCreateIndex: true
    })
    console.log(`DataBase is connected to ${db.connection.name}`) 
  } catch (error) {
    console.log(`Something went Wrong \n ${error}`)
  }
})()