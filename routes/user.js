import express from 'express';
import { GetById, RegisterUser, SpecialFunc, getAllUsers } from '../controllers/UserController.js';



const router = express.Router();

router.get("/all",getAllUsers);

router.post("/new",RegisterUser);

router.get("/userid/special",SpecialFunc);

router.get("/userid/:id",GetById);
export default router;