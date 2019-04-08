var express=require("express")
var port= 4000
var app= express()
var bc= require("./controllers/books_controller")


app.use(express.json())

app.use(express.static(__dirname+'/../build'))

app.get('/api/books', bc.read)

app.post('/api/books', bc.create)

app.put('/api/books/:id', bc.update)

app.delete('/api/books/:id', bc.destroy)




app.listen(port, ()=>{
    console.log("hello there")
  })