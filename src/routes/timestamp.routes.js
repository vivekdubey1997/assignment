import { Router } from "express";
import {addTimestamp } from "../controllers/timestamp.controller.js"; 



const router = Router()

router.route("/").post( addTimestamp )


export default router