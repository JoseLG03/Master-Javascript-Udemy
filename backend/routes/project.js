'use strict'

let express = require('express');
let ProjectController = require("../controllers/project");

let router = express.Router();
let multipart = require('connect-multiparty');
let multipartMiddlewere = multipart({uploadDir: './uploads'});

router.get('/home',ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project',ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);
router.post('/upload-img/:id', multipartMiddlewere, ProjectController.uploadImg);
router.get('/get-image/:img', ProjectController.getImageFile);

module.exports= router;