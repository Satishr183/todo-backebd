const express = require('express')
const router = express.Router()
const {createTodo,getTodos, deleteTodo} = require('../controllers/todoController')


router.get('/test',function(req,res){
     let obj={
        name:"Satish",
        mob:12221364
     }
     res.status(200).send(obj)
})

router.post('/createTodo',createTodo)

router.get('/getTodos',getTodos)
router.delete("/deleteTodo/:id",deleteTodo)

module.exports = router