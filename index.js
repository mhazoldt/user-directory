let data = require('./data.js')
let express = require('express')
let mustacheExpress = require('mustache-express')

let app = express()

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static('public'))

app.get("/", function(req, res, next){
    res.render("index", {appType: "Express", data})

})

app.get("/user/:username", function(req, res, next){
    console.log("route started")
    let profileData = data.users.filter((user) => {
        return (user.username === req.params["username"])
    })[0]
    
    res.render("profile", profileData)
})

// console.log(data.users)

console.log(data.users.filter((user) => {
        return (user.username === "hjuza0")
    })
)

app.listen(3000, function(){
    console.log("App is listening on port 3000")
})


