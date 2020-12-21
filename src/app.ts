import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import productsRoutes from './routes/products.routes'

const app = express();

//settings
app.set('port', 4000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);


export default app;