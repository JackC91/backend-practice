import express from "express";

import { 
    getData,
    getDataByName,
    getDataById,
    getDataByOccupation,
    createNewUser,
    updateUser,
    deleteUserById,
    deleteUserByName,
    deleteUserByRole
 } from "../models/models.js";

const router = express.Router();


//get all, by id, by name and by occupation
router.get("/read", (req, res) => {
    const name = req.query.name;
    const id_num = req.query.id;
    const role = req.query.occupation;
    if(name) {
        return res.json({
            success: true,
            status: res.statusCode,
            payload: getDataByName(name)
    })
    } else if (id_num) {
        return res.json({
            success: true,
            status: res.statusCode,
            payload: getDataById(id_num)
    })
    } else if (role) {
        return res.json({
            success: true,
            status: res.statusCode,
            payload: getDataByOccupation(role)
    })
    }
    return res.json({
        success: true,
        status: res.statusCode,
        data: getData()
})
})

//test create route
router.post("/create", (req, res) => {
    const body = req.body;
    return res.json({
        sucess: true,
        status: res.statusCode,
        message: "New user created",
        payload: createNewUser(body)
    })
})

//test update route
router.put("/update", (req, res) => {
    const body = req.body;
    return res.json({
        success: true,
        status: res.statusCode,
        message: "User has been updated",
        payload: updateUser(body)
    })
})

//test delete route
router.delete("/delete", (req, res) => {
    const id = req.query.id;
    const name = req.query.name;
    const role = req.query.occupation;
    if (id) {
    return res.json({
        success: true,
        status: res.statusCode,
        message: "User has been deleted",
        payload: deleteUserById(id)
    })
} else if (name) {
    return res.json({
        success: true,
        status: res.statusCode,
        message: "User has been deleted",
        payload: deleteUserByName(name)
    })
} else if (role) {
    return res.json({
        success: true,
        status: res.statusCode,
        message: "User has been deleted",
        payload: deleteUserByRole(role)
})
}
})



export default router