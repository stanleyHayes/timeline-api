/**
 * @description get users of a organisation
 *
 * @param  req - Request object
 * @param  res - Response object
 *
 * @returns users | error
 * */

const getUsers = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: ``});
    } catch (e) {
        res.status(400).json({message: `Error: ${e.message}`});
    }
}


/**
 * @description create user
 *
 * @param req - Request object
 * @param res - Response object
 *
 * @return user | error
 * */
const createUser = async (req, res) => {
    try {
        res.status(201).json({data: {}, message: ``});
    } catch (e) {
        res.status(400).json({message: `Error: ${e.message}`});
    }
}


/**
 * @description get user by id
 *
 * @param req - Request object
 * @param res - Response object
 *
 * @return user | error
 * */
const getUser = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: ``});
    } catch (e) {
        res.status(400).json({message: `Error: ${e.message}`});
    }
}


/**
 * @description update user by id
 *
 * @param req - Request object
 * @param res - Response object
 *
 * @return user | error
 * */
const updateUser = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: ``});
    } catch (e) {
        res.status(400).json({message: `Error: ${e.message}`});
    }
}


/**
 * @description delete user by id
 *
 * @param req - Request object
 * @param res - Response object
 *
 * @return user | error
 * */
const deleteUser = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: ``});
    } catch (e) {
        res.status(400).json({message: `Error: ${e.message}`});
    }
}


module.exports = {getUsers, getUser, createUser, updateUser, deleteUser};