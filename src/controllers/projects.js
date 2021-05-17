/**
 * @description get projects of a organisation
 *
 * @param req - Request object
 * @param res - Response object
 *
 * @return projects | error
 * */

const getProjects = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: ``});
    } catch (e) {
        res.status(400).json({message: `Error: ${e.message}`});
    }
}


/**
 * @description create project
 *
 * @param req - Request object
 * @param res - Response object
 *
 * @return project | error
 * */
const createProject = async (req, res) => {
    try {
        res.status(201).json({data: {}, message: ``});
    } catch (e) {
        res.status(400).json({message: `Error: ${e.message}`});
    }
}


/**
 * @description get project by id
 *
 * @param req - Request object
 * @param res - Response object
 *
 * @return project | error
 * */
const getProject = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: ``});
    } catch (e) {
        res.status(400).json({message: `Error: ${e.message}`});
    }
}


/**
 * @description update project by id
 *
 * @param req - Request object
 * @param res - Response object
 *
 * @return project | error
 * */
const updateProject = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: ``});
    } catch (e) {
        res.status(400).json({message: `Error: ${e.message}`});
    }
}


/**
 * @description delete project by id
 *
 * @param req - Request object
 * @param res - Response object
 *
 * @return task | error
 * */
const deleteProject = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: ``});
    } catch (e) {
        res.status(400).json({message: `Error: ${e.message}`});
    }
}


module.exports = {getProjects, getProject, createProject, updateProject, deleteProject};