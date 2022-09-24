const express = require('express')
const app = express()
const { todosRouter } = require('./routes/todos')

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded())

app.use(['/todos', '/todo'], todosRouter)

app.listen(PORT, (err) => {

    (!err) ? console.log("Server start at PORT", PORT) : console.log(err)

})
