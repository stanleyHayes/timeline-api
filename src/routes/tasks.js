const express = require('express');
const router = express.Router({mergeParams: true});

const {deleteTask, updateTask, createTask, getTask, getTasks} = require('../controllers/tasks');

router.route('/')
    .post(createTask)
    .get(getTasks);

router.route('/:id')
    .get(getTask)
    .put(updateTask)
    .delete(deleteTask);

module.exports = router;