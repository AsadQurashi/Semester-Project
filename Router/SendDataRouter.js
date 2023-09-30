import express from 'express';
import { GetRingData, RingData, DeleteRingData, UpdateRingData } from '../Controller/SendDataController.js';
import authenticateToken from '../Config/Authenticationtoken.js';


const router = express.Router();
router.post("/",authenticateToken , RingData);
router.get('/',authenticateToken ,GetRingData);
router.delete('/:id', authenticateToken, DeleteRingData);
router.put('/:id', authenticateToken, UpdateRingData);

export default router;
