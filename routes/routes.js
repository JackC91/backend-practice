import express from "express";

import { 
    getData,
    getDataByName
 } from "../models/models.js";

const router = express.Router();

//test create route
router.get("/create", (req, res) => {
    res.send("Create/POST route working")
})

//test read route, refactor for correct route
router.get("/read", (req, res) => {
    const name = req.query.name
    if(name) {
        return res.json({
            success: true,
            status: res.statusCode,
            data: getDataByName(name)
    })
    }
    return res.json({
        success: true,
        status: res.statusCode,
        data: getData()
})
})


//test update route
router.get("/update", (req, res) => {
    res.send("Update/PUT/PATCH route working")
})

//test delete route
router.get("/delete", (req, res) => {
    res.send("Delete/DELETE route working")
})



export default router