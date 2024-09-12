import { Router } from "express";
import { getAllProducts,insertedProducts,pagination } from "../controllers/product.controller.js"; 



const router = Router()

router.post('/add', insertedProducts)
router.get("/",getAllProducts)
router.get("/pagination", pagination)


export default router