import express from "express";

import { 
    getData,
    getDataByName,
    getDataById,
    getDataByOccupation
 } from "../models/models.js";

const router = express.Router();

//test create route
router.get("/create", (req, res) => {
    res.send("Create/POST route working")
})

//test read route, refactor for correct route
router.get("/read", (req, res) => {
    const name = req.query.name;
    const id_num = req.query.id;
    const role = req.query.occupation;
    if(name) {
        return res.json({
            success: true,
            status: res.statusCode,
            data: getDataByName(name)
    })
    } else if (id_num) {
        return res.json({
            success: true,
            status: res.statusCode,
            data: getDataById(id_num)
    })
    } else if (role) {
        return res.json({
            success: true,
            status: res.statusCode,
            data: getDataByOccupation(role)
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