'use strict'

let express = require('express');
let ProjectController = require("../controllers/project");

let router = express.Router();

router.get('/home',ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project',ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);

module.exports= router;