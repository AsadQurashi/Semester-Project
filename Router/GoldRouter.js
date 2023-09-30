import express from 'express';
import { GetGoldData, Gold_Data, DeleteGoldData, UpdateGoldData } from '../Controller/SendDataController.js';
import authenticateToken from '../Config/Authenticationtoken.js';

const router = express.Router();
router.post("/",authenticateToken , Gold_Data);
router.get("/",authenticateToken, GetGoldData);
router.delete('/:id', authenticateToken, DeleteGoldData);
router.put('/:id', authenticateToken, UpdateGoldData);


export default router;