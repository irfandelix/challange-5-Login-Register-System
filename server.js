const express = require('express')
const app = express()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
const PORT = process.env.PORT || 3000

app.use(express.static('views'))
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.json())
app.use(express.urlencoded({extended: true})) 

const apiRouter = express.Router()
const v1 = express.Router()
app.use('/api', apiRouter)
apiRouter.use('/v1',v1)

// Backend Register
v1.post("/register", (req, res) => {
    const { username, password } = req.body
    const data = fs.readFileSync('data/data.json',"utf-8")
    const parsedData = JSON.parse(data)
    const newUser = {
        id: uuidv4(),
        username,
        password
    }
    parsedData.push(newUser)
    fs.writeFileSync('data/data.json', JSON.stringify(parsedData, null, 2))
    console.log(newUser, 'Data Created')
    res.redirect('/login')
})

//Halaman Register
app.get("/register", (req, res) => {
    res.render('register')
})

// Backend Login
v1.post("/login", (req, res) => {
    const { username, password } = req.body
    const foundUser = fs.readFileSync('data/data.json',"utf-8")
    const parsedData = JSON.parse(foundUser)
    const userFound = parsedData.find((user) => user.username == username)
    if (!userFound){
        // console.log("gagal")
        res.redirect("/login")
    } else if (userFound.password == password){
        // console.log("sukses")
        res.redirect("/playnow")
    }else {
        // console.log("belum punya")
        res.redirect("/login")
        // alert("wrong")
    }
})

//Halaman Login
app.get("/login", (req,res) => {
    res.render('login')
})

//Halaman Game
app.get("/playnow", (req,res) => {
    res.render('playnow')
})

//halaman Utama
app.get("/", (req, res) => {
    // console.log('Hello World')
    // res.send("Hellow")
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`Server is up at http://localhost:${PORT}`)
})