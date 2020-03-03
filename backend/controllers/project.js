'use strict'

let Project = require('../models/project');
let fs = require('fs');
let path = require('path');

let controller ={
    home: function(req, res){
        return res.status(200).send({
            message: "Hola soy home"
        })
    },
    test: function(req,res){
        return res.status(200).send({
            message:"Soy el metodo o accion test del controlador project"
        })
    },
    saveProject:function(req,res){
        let project = new Project();

        let params= req.body;
        
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.img = null;

        project.save((err, projectStored)=>{
            if(err){ 
                return res.status(500).send({message: 'Error en el guardado.'});
            };

            if(!projectStored){
                 return res.status(404).send({message: 'No se ha podido guardar el proyecto'});
            };

            return res.status(200).send({project:projectStored});
        });
    },
    getProject:function(req,res){
        let projectID = req.params.id;

        if(projectID==null){
            return res.status(400).send({message:'El proyecto no existe'}); 
        };

        Project.findById(projectID,(err,project) =>{
            if(err){
                return res.status(500).send({message: 'Error al obtener los datos.'});
            }
            if(!project){
                return res.status(404).send({message: 'No se ha podido obtener el proyecto'});
           };

           return res.status(200).send({project});
        });
    },
    getProjects:function(req,res){
        Project.find({}).sort('year').exec((err,projects)=>{
            if(err){
                return res.status(500).send({message: 'Error al obtener los proyectos.'});
            }
            if(!projects){
                return res.status(404).send({message: 'No se han podido obtener los proyectos.'});
           };
           return res.status(200).send({projects});
        });       
    },
    updateProject: function(req,res){
        let projectID = req.params.id;
        let update = req.body;

        Project.findByIdAndUpdate(projectID, update,{new:true},(err, projectUpdate)=>{
            if(err){
                return res.status(500).send({message: 'Error al actualizar.'});
            }
            if(!projectUpdate){
                return res.status(404).send({message: 'No existe el proyecto para actualizar.'});
           };
           return res.status(200).send({
               project:projectUpdate
            });
        } );
    },
    deleteProject:function(req,res){
        var id = req.params.id;
        Project.findByIdAndRemove(id,(err,projectRemoved)=>{
            if(err){
                return res.status(500).send({message: 'Error al borrar.'});
            }
            if(!projectRemoved){
                return res.status(404).send({message: 'No existe el proyecto para eliminar.'});
           };
           return res.status(200).send({
               project:projectRemoved
            });
        });
    },
    uploadImg:function(req,res){
        let projectID = req.params.id;
        let fileName = 'Imagen no subida...';

        if(req.files){

            let filePath = req.files.img.path;
            let fileSplit = filePath.split('\\');
            let fileName = fileSplit[1];
            let extSplit = fileName.split('.');
            let fileExt = extSplit[1];

            if(fileExt == "jpg" || fileExt == "png" || fileExt == "gif" || fileExt == "jpge" ){
                Project.findByIdAndUpdate(projectID, {img: fileName}, {new:true}, (err,projectUpdate)=>{
                    if(err){
                        return res.status(200).send({message: 'Error al cargar imagen.'});
                    }
                    if(!projectUpdate){
                        return res.status(404).send({message: 'No existe el proyecto para cargar la imagen.'});
                    }; 
                    return res.status(200).send({
                        project: projectUpdate
                    });
                });
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(400).send({message: 'Extencion no valida'});
                });
            }
        }else{
            return res.status(404).send({
                message:fileName
            })
        }    
    },

    getImageFile: function(req,res){
        let file = req.params.img;
        let pathFile = './uploads/'+file;

        fs.exists(pathFile, (exists) =>{
            if(exists){
                return res.sendFile(path.resolve(pathFile));
            }else{
                return res.status(200).send({
                    message:"No existe la imagen..."
                });
            }
        });
    }
};

module.exports = controller;