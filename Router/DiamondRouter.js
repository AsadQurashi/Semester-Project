import express from "express";
import { DiamondData, GetDiamondData, DeleteDiamondData, UpdateDiamondData } from "../Controller/SendDataController.js";
import authenticateToken from "../Config/Authenticationtoken.js";

const router = express.Router();
router.post('/', authenticateToken, DiamondData);
router.get('/', authenticateToken, GetDiamondData);
router.delete('/:id', authenticateToken, DeleteDiamondData);
router.put('/:id', authenticateToken, UpdateDiamondData);


export default router;
