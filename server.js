const express = require('express') // setup express server
const app = express()

app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
// app.use(logger)

app.get('/', (req, res) => {
    console.log('Here')
    res.render('index', {text:"World"})
})

const userRouter = require("./routes/users")
app.use("/users", userRouter)

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000)