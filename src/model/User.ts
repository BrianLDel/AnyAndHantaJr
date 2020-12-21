import {Schema, model, Document, Model} from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document{
  username: string;
  email: string;
  password: string;
}

interface IUserModel extends Model<IUser>{
  encryptPassword(password: string): Promise<string>;
  comparePassword(recievePassword: string, userPassword: string): Promise<string>
}


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 4,
    lowercase: true
  },
  email:{
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password:{
    type: String,
    required: true,
    min: 4
  }
}, {
  timestamps: true,
  versionKey: false
});

userSchema.static('encryptPassword', async function(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);

  return await bcrypt.hash(password, salt);
})

userSchema.static('comparePassword', async function(recievePassword: string, userPassword: string): Promise<boolean> {
  return await bcrypt.compare(recievePassword, userPassword);
})

export default model<IUser, IUserModel>('User', userSchema);

