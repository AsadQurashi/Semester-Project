import express from "express";
import { AccountCreation } from "../Controller/AdminController.js";


const router = express.Router();

router.post("/", AccountCreation);

export default router;
