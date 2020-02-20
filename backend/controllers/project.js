'use strict'

let Project = require('../models/project');

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
    }
};

module.exports = controller;