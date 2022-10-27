const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
const courseData = require("./Data/courseData.json")

app.use(cors())

app.get('/courses',(req,res)=>{
    res.send(courseData)
})

app.get('/course/:id',(req,res)=>{
    const id = req.params.id
    const singleCourseData = courseData.find(c=>c.id == id)
    res.send(singleCourseData)
})
app.get('/checkout/:id',(req,res)=>{
    const id = req.params.id
    const checkoutData = courseData.find(c=>c.id == id)
    res.send(checkoutData)
})




// 
app.listen(port, ()=>{
    console.log(`Dragon News Running on port ${port}`)
})