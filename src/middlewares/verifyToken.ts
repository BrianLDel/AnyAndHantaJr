import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../model/User';

export const verifyToken = async(req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['skywalker'];

  if(!token) return res.status(401).json({error: 'A token \"skywalker\" is required'})

  try {
    const decodedJwt: any = jwt.verify(`${token}`, `${config.JWT_SECRET}`);
    
    const userFound = await User.findById(decodedJwt.id);
    
    if(!userFound) return res.status(404).json({error: 'No user related to the token'})

    next();
  } catch (error) {
    return res.status(401).json({error})
  }
}