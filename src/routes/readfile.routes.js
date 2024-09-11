import { Router } from "express";
import { readFile} from "../controllers/readfile.controller"; 



const router = Router()

router.route("/").get( readFile )


export default router