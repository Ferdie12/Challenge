const {supplier} = require("../models")
module.exports = {

index : async (req,res,next) => {
    try {
        const suppliers = await supplier.findAll();

        return res.status(200).json({
            status : true,
            message: "succes",
            data : suppliers
        })
    } catch (err) {
        next(err);
    }
},

showDetail : async (req,res,next) => {
    try {
        const supplier_id = req.params.id
        const suppliers = await supplier.findOne({where: {id: supplier_id}});

        if(!suppliers){
            return res.status(404).json({
                status : false,
                message: `cannot get supplier with supplier id ${supplier_id}`,
                data : null
            });
        }

        return res.status(200).json({
            status : true,
            message: "succes",
            data : suppliers
        });

    } catch (err) {
        next(err)
    }
},

store : async (req,res,next) => {
    try {
        const {name, address} = req.body;

        if(!name || !address){
            return res.status(400).json({
                status: false,
                message: "name or email is required!"
            })
        }

        const exist = await supplier.findOne({where: {name, address}});
        if(exist){
            return res.status(400).json({
                status: false,
                message: "supplier is already created!"
            })
        }

        const suppliers = await supplier.create({
            name: name,
            address : address
        })
        
        return res.status(201).json({
            status : true,
            message: "succes",
            data : suppliers
        })
    } catch (err) {
        next(err);
    }
},

update : async (req,res,next) => {
    try {
        const supplier_id = req.params.id
    
        const update = await supplier.update(req.body, {where: {id: supplier_id}});
        
        if(!update[0]){
            return res.status(404).json({
                status : false,
                message: `cannot update supplier with supplier id ${supplier_id}`,
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
        const supplier_id = req.params.id
    
        const deleted = await supplier.destroy({where: {id: supplier_id}});
        
        if(!deleted){
            return res.status(404).json({
                status : false,
                message: `cannot delete supplier with supplier id ${supplier_id}`,
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