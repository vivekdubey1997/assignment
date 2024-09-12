import { Router } from "express";
import { getCategoryCounts, insertCategories } from "../controllers/category.controller.js"; 



const router = Router()

router.post('/add', insertCategories) // To add and return added Categories
router.get('/', getCategoryCounts)


export default router