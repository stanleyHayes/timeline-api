// get all tasks
// get all task of a project
// get all tasks of a user
// get task of a certain status e.x. completed, progress, started
// get task by id
// update task by id
// delete task by id
//create task

/**
 * @description gets tasks of a specific project, user, or all tasks
 *
 * @param req - Request object
 * @param res - Response object
 *
 * @return tasks | error
 * */
const getTasks = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: ``});
    } catch (e) {
        res.status(400).json({message: `Error: ${e.message}`});
    }
}


/**
 * @description creates task
 *
 * @param req - Request object
 * @param res - Response object
 *
 * @return task | error
 * */
const createTask = async (req, res) => {
    try {
        res.status(201).json({data: {}, message: ``});
    } catch (e) {
        res.status(400).json({message: `Error: ${e.message}`});
    }
}


/**
 * @description get task by id
 *
 * @param req - Request object
 * @param res - Response object
 *
 * @return task | error
 * */
const getTask = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: ``});
    } catch (e) {
        res.status(400).json({message: `Error: ${e.message}`});
    }
}


/**
 * @description update task by id
 *
 * @param req - Request object
 * @param res - Response object
 *
 * @return task | error
 * */
const updateTask = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: ``});
    } catch (e) {
        res.status(400).json({message: `Error: ${e.message}`});
    }
}


/**
 * @description delete task by id
 *
 * @param req - Request object
 * @param res - Response object
 *
 * @return task | error
 * */
const deleteTask = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: ``});
    } catch (e) {
        res.status(400).json({message: `Error: ${e.message}`});
    }
}


module.exports = {getTasks, getTask, createTask, updateTask, deleteTask};