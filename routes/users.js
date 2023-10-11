const express = require("express")
const router = express.Router() //mini-app: independent of main router

router.get("/", (req, res) => {
    res.send("User List")
})

router.get("/new", (req, res) => {
    res.render("users/new", {firstName:"Test"})
})

router.post('/', (req, res) => {
    const isValid = true
    if(isValid){
        users.push({firstName:req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    }else{
        console.log("Error")
        res.render("users/new", {firstName:req.body.firstName})
    }
    res.send("Create User")
    console.log(req.body.firstName)
})

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user)
        res.send(`User Get With ID ${req.params.id}`)
    })
    .put( (req, res) => {
        res.send(`Update Get With ID ${req.params.id}`)
    })

    .delete((req, res) => {
        res.send(`Delete Get With ID ${req.params.id}`)
    })

const users = [{name:"Kyle"}, {name:"Sally"}]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router