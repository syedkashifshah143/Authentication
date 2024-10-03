import express from 'express';
import { newUser, getUser, updateUser, deleteUser, uploadImage } from '../Controllers/productsControllers.js';


const productsRouter = express.Router();

productsRouter.post('/users', uploadImage, newUser);

productsRouter.get('/users', getUser);

productsRouter.put('/users/:id', updateUser);

productsRouter.delete('/users/:id', deleteUser);

export default productsRouter;
