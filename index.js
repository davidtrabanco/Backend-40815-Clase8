import express from "express";
import {prodRouter} from "./routers/productos.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static('./public'));
app.use('/api/productos', prodRouter);


const PORT = process.env.PORT || 8080
const server = app.listen( PORT, ()=>{
    console.log(`Server UP on PORT:${server.address().port}`);
})
