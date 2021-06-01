const express = require('express');
const router = express.Router({mergeParams: true});

const {getProjects, getProject, createProject, updateProject, deleteProject} = require('../controllers/projects');

router.route('/')
    .post(createProject)
    .get(getProjects);

router.route('/:id')
    .get(getProject)
    .put(updateProject)
    .delete(deleteProject);

module.exports = router;