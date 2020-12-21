import {Schema, model, Document} from 'mongoose';

export interface IProduct extends Document{
  name: string;
  description: string;
  price: Number;
}

const productSchema = new Schema({
  name:{
    type: String,
    required: true,
    min: 2,
  },
  description:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  }
}, {
  timestamps:true,
  versionKey: false
})

export default model<IProduct>('Product', productSchema);