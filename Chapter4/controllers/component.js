const {component} = require("../models")
module.exports = {

index : async (req,res,next) => {
    try {
        const components = await component.findAll();

        return res.status(200).json({
            status : true,
            message: "succes",
            data : components
        })
    } catch (err) {
        next(err);
    }
},

showDetail : async (req,res,next) => {
    try {
        const component_id = req.params.id
        const components = await component.findOne({where: {id: component_id}});

        if(!components){
            return res.status(404).json({
                status : false,
                message: `cannot get component with component id ${component_id}`,
                data : null
            });
        }

        return res.status(200).json({
            status : true,
            message: "succes",
            data : components
        });

    } catch (err) {
        next(err)
    }
},

store : async (req,res,next) => {
    try {
        const {name, description} = req.body;

        const components = await component.create({
            name: name,
            description : description
        })
        
        return res.status(201).json({
            status : true,
            message: "succes",
            data : components
        })
    } catch (err) {
        next(err);
    }
},

update : async (req,res,next) => {
    try {
        const component_id = req.params.id
    
        const update = await component.update(req.body, {where: {id: component_id}});
        
        if(!update[0]){
            return res.status(404).json({
                status : false,
                message: `cannot update component with component id ${component_id}`,
                data : null
            });
        }
        return res.status(200).json({
            status : true,
            message: "succes",
            data : update[0]
        });
    } catch (err) {
        next(err)
    }
},

destroy : async (req,res,next) => {
    try {
        const component_id = req.params.id
    
        const deleted = await component.destroy({where: {id: component_id}});
        
        if(!deleted){
            return res.status(404).json({
                status : false,
                message: `cannot delete component with component id ${component_id}`,
                data : null
            });
        }
        return res.status(200).json({
            status : true,
            message: "succes",
            data : deleted
        });
    } catch (err) {
        next(err)
    }
}

}