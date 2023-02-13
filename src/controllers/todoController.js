const todoModel = require('../models/taskModel')

const createTodo = async function(req, res){
    try {
        const {title, description, option} = req.body
        console.log(req.body)
        const newTodo = await todoModel.create(req.body)
        res.status(201).send({data:newTodo})
    } catch (error) {
        res.status(500).send({message:error.message})
    }
}

const getTodos = async function(req,res){
    const todos = await todoModel.find()
    res.status(200).send({data:todos})
}

const deleteTodo = async function(req,res){

    console.log(req.params.id)
    let deletebyid=await todoModel.findByIdAndDelete({_id:req.params.id})

}
module.exports = {createTodo,getTodos,deleteTodo}