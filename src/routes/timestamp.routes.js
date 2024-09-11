import { Router } from "express";
import {addTimestamp } from "../controllers/timestamp.controller"; 



const router = Router()

router.route("/").post( addTimestamp )


export default router