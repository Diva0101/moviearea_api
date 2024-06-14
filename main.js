import express, { json } from "express"
import movieRoutes from "./routes/movies.routes.js"
import dbConnect from "./lib/db.js";

const app = express();
const port = 6969;

dbConnect();
app.use(express.json())

app.get('/',(req, res)=>{
    res.json({msg: "hello"})
});

app.use('/movies', movieRoutes)

app.listen(port,()=>{
    console.log(`This server running at http://localhost:${port}`)
});