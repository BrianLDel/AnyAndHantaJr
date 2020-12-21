import {Request, Response, NextFunction} from 'express';
import {createProductSchema, updateProductSchema} from './Schemas'

export const verifyProductCreate = async(req: Request, res: Response, next: NextFunction) => {
  try {
    await createProductSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({error: error})
  }
}

export const verifyProductUpdate = async(req: Request, res: Response, next: NextFunction) => {
  const productId = req.params.productId;

  if(!productId) return res.status(400).json({error: 'An ID is required'})

  try {
    await updateProductSchema.validateAsync(req.body)
    next();
  } catch (error) {
    return res.status(400).json({error: error})
  }
}
