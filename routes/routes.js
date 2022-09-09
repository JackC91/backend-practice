import express from "express";

const router = express.Router();

//test create route
router.get("/create", (req, res) => {
    res.send("Create/POST route working")
})

//test read route, refactor for correct route
router.get("/read", (req, res) => {
    res.send("Read/GET route working")
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