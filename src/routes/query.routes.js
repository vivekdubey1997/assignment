import { Router } from "express";
import { findActiveUsers} from "../controllers/query.controller"; 



const router = Router()

router.route("/").get( findActiveUsers )


export default router