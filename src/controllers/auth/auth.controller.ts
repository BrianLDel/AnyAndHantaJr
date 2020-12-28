import {json, Request, Response} from 'express';
import User, {IUser} from '../../model/User';
import jwt from 'jsonwebtoken';
import config from '../../config'

export const signup = async(req: Request, res: Response) =>{
  const {username, email, password} = req.body;

  const user: IUser = new User({
    username: username,
    email: email,
    password: await User.encryptPassword(password) //Siempre usar await si la funcion esta definida junto con async
  })

  try {
    const userSaved = await user.save();

    const token: String = jwt.sign({id: userSaved._id}, `${config.JWT_SECRET}`,{
      expiresIn: 43200
    }); //Es una credencial para que el user pueda pedir al server

    res.status(201).json({token});
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error})
  }


}

export const login = async(req: Request, res: Response) =>{
  const {email, password} = req.body;
  console.log(req.body, 'login')

  try {
    const userFound = await User.findOne({email: email})
  
    if(!userFound) return res.status(400).json({error: `User with email: ${email} doesn't exists`})
  
    const matchPassword = await User.comparePassword(password, userFound.password);
  
    if(!matchPassword) return res.status(401).json({error: 'pass not match'})
  
    const token = jwt.sign({id: userFound._id}, `${config.JWT_SECRET}`,{
      expiresIn: 43200
    })
  
    res.status(200).json({token: token})
  } catch (error) {
    res.status(500).json({error: error})
  }

}
