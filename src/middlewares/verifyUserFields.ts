import {Request, Response, NextFunction} from 'express';
import {createUserSchema, loginUserSchema} from './Schemas';

export const verifyUserCreate = async(req: Request, res: Response, next: NextFunction) => {
  try {
    await createUserSchema.validateAsync(req.body)
    next();
  } catch (error) {
    return res.status(400).json({error: error})
  }
}

export const verifyUserLogin = async(req: Request, res: Response, next: NextFunction) => {
  try {
    await loginUserSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({error: error})
  }
}
