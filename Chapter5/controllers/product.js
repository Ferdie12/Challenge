const {product} = require("../models")
module.exports = {

index : async (req,res,next) => {
    try {
        const products = await product.findAll();

        return res.status(200).json({
            status : true,
            message: "succes",
            data : products
        })
    } catch (err) {
        next(err);
    }
},

showDetail : async (req,res,next) => {
    try {
        const product_id = req.params.id
        const products = await product.findOne({where: {id: product_id}});

        if(!products){
            return res.status(404).json({
                status : false,
                message: `cannot get product with product id ${product_id}`,
                data : null
            });
        }

        return res.status(200).json({
            status : true,
            message: "succes",
            data : products
        });

    } catch (err) {
        next(err)
    }
},

store : async (req,res,next) => {
    try {
        const {name, quantity} = req.body;

        const products = await product.create({
            name: name,
            quantity : quantity
        })
        
        return res.status(201).json({
            status : true,
            message: "succes",
            data : products
        })
    } catch (err) {
        next(err);
    }
},

update : async (req,res,next) => {
    try {
        const product_id = req.params.id
    
        const update = await product.update(req.body, {where: {id: product_id}});
        
        if(!update[0]){
            return res.status(404).json({
                status : false,
                message: `cannot update product with product id ${product_id}`,
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
        const product_id = req.params.id
    
        const deleted = await product.destroy({where: {id: product_id}});
        
        if(!deleted){
            return res.status(404).json({
                status : false,
                message: `cannot delete product with product id ${product_id}`,
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