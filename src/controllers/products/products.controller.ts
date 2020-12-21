import {Request, Response} from 'express';
import Product, {IProduct} from '../../model/Product'

export const listProducts = async(req: Request, res: Response) => {
  try {
    const products = await Product.find();

    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({error: error})
  }
}

export const findProductById = async(req: Request, res: Response) => {
  const productId = req.params.productId;

  if(!productId) return res.status(400).json({error: 'An ID is required'})

  try {
    const productFound = await Product.findById(productId);

    res.status(200).json(productFound)
  } catch (error) {
    res.status(500).json({error: error})
  }
}

export const createProduct = async (req: Request, res: Response) => {
  const {name, description, price} = req.body;

  const product: IProduct = new Product({
    name: name,
    description: description,
    price: price
  })

  try {
    const productSaved = await product.save();
    res.status(201).json(productSaved) 
  } catch (error) {
    res.status(500).json({error: error})
  }
}

export const modifyProductById = async(req: Request, res: Response) => {
  const productId = req.params.productId;
  const product = req.body;

  try {
    const productUpdated = await Product.findByIdAndUpdate(productId, product)
    res.status(204).json(productUpdated) //is not necessary, you could just .send() empty
  } catch (error) {
    res.status(500).json({error: error})
  }
  
}

export const deleteProductById = async(req: Request, res: Response) => {
  const productId = req.params.productId;

  if(!productId) return res.status(400).json({error: 'An ID is required'})

  try {
    const productDeleted = await Product.findByIdAndDelete(productId);
    res.status(204).json(productDeleted) //is not necessary, you could just .send() empty
  } catch (error) {
    res.status(500).json({error: error})
  }
}