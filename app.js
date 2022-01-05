const express = require('express')
const app = express()
const PORT = 3000 

app.get('/' , (req,res) => {
    res.send('app is running now')
})

app.listen (PORT , () => {
    console.log(`app listen now on ${PORT}`)
})