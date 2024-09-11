import { Router } from "express";
import { getCategoryCounts } from "../controllers/category.controller"; 



const router = Router()

router.route("/").get( getCategoryCounts )


export default router