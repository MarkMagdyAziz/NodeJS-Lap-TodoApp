const express = require('express')
const router = express.Router()
const { fileChecker, handleAdd, handleCheck, handleList, handleListUnCompleted, handleListCompleted, handleRemove, handleUnCheck, handleUpdate } = require('../helpers/helpers')

//a. Add Todo
router.post('', (req, res) => {
    handleAdd(req.body)
    res.end(`Added Successed`)
})

//b. Edit Todo
router.put("/:id", (req, res) => {
    handleUpdate(req.params.id, req.body)
    res.end(`Updated Successed`)
})

//c. Remove Todo
router.delete("/:id", (req, res) => {
    handleRemove(req.params.id)
    res.end(`Removed Successed`)
})

//d. & e. Check or Uncheck The Todo => b
router.put('/:id', (req, res) => {
    console.log(req.params.id)
    // res.json()
    res.end("Checked Todo")
})


//f. List all Todos
router.get('', (req, res) => {
    const todos = handleList()
    res.json(todos)
})

//f.List Completed Todos && UnCompleted Todos
router.get('/:id', (req, res) => {
    const checked = JSON.parse(req.query.checked)
    const todos = handleListCompleted(checked)
    res.json(todos)
})

module.exports = { todosRouter: router }







