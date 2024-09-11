import { Router } from "express";
import { getAllProducts,pagination } from "../controllers/product.controller"; 



const router = Router()

router.route("/pagination").get( pagination )
router.route("/").get(getAllProducts)


export default router