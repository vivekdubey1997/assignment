import { Router } from "express";
import { findActiveProducts} from "../controllers/query.controller.js"; 



const router = Router()

router.route("/").get( findActiveProducts )


export default router