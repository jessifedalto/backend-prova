import express from 'express';
import PersonController from '../controller/PersonController.js';

const route = express.Router();

route 
    .get('/', PersonController.getAllPeople)
    .post('/', PersonController.create)
    .delete('/:id', PersonController.deleteById)
    
export default route;