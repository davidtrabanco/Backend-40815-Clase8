import {Router} from "express";
import {contenedor} from "../controller/Contenedor.js";

export const prodRouter = Router();

prodRouter.get("/", (req,res)=>{
    //si existe un id enviado por formulario:
    if(req.query.id){
        res.json( contenedor.getById( req.query.id ));
    }else{
        res.json( contenedor.getAll() );
    }
})

prodRouter.get("/:id", (req,res)=>{
    res.json( contenedor.getById( req.params.id ));
})

prodRouter.post("/", (req,res)=>{
    res.send( `Producto agregado con ID:${contenedor.save( req.body )}`);
})

prodRouter.put( "/:id", (req,res) =>{
    console.log(req.body);
    res.json( contenedor.update( req.params.id, req.body))
})

prodRouter.delete( "/:id", (req, res) =>{
    res.json( contenedor.deleteById( req.params.id, req.params.body ));
})