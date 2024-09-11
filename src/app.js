import express from 'express'
import cors from "cors"
const app = express()


app.use(
  cors({
    origin: '*',
    credentials:true
  })

)


app.use(express.json())

app.use(express.urlencoded({extended:true,}))

import productRouter from './routes/product.routes.js'
import categoryRouter from './routes/category.routes.js'
import queryRouter  from './routes/query.routes.js'
import readFileRouter from "./routes/readfile.routes.js"
import timestampRouter from "./routes/timestamp.routes.js"
app.use("/api/v1/products", productRouter)
app.use("/api/v1/category",categoryRouter)
app.use("/api/v1/query",queryRouter)
app.use("/api/v1/file",readFileRouter)
app.use("/api/v1/timestamp",timestampRouter)
export {app}



