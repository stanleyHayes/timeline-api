const register = async (req, res) => {
    try {
        res.status(201).json({data: {}, message: ``});
    } catch (e) {
        res.status(500).json({message: `Error: ${e.message}`});
    }
}


const login = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: ``});
    } catch (e) {
        res.status(500).json({message: `Error: ${e.message}`});
    }
}


const updatePassword = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: ``});
    } catch (e) {
        res.status(500).json({message: `Error: ${e.message}`});
    }
}


const getProfile = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: ``});
    } catch (e) {
        res.status(500).json({message: `Error: ${e.message}`});
    }
}


const deleteProfile = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: ``});
    } catch (e) {
        res.status(500).json({message: `Error: ${e.message}`});
    }
}


const updateProfile = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: ``});
    } catch (e) {
        res.status(500).json({message: `Error: ${e.message}`});
    }
}


module.exports = {register, login, updateProfile, getProfile, deleteProfile, updatePassword};