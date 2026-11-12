const {product}=require('../models')
const fs=require('fs')

exports.createProduct=async(req,res)=>{
try{
const { productName,productPrice}=req.body
const productImage=req.file.path
console.log("file properties",productImage)

const create= await product.create({
productName,productPrice,productImage
})

res.status(201).json({
 message:"product created succefully",
 data:create
})

}catch(e){
res.status(500).json({
    message:"there is a server error",
    data:e.message
})
}
}

exports.getAll=async(req,res)=>{
    try{
   const allProduct= await product.findAll()

   res.status(200).json({
      message:`the total products in the database is ${allProduct.length}`,
      data:allProduct
   })
    }catch(e){
        res.status(500).json({
    message:"there is a server error",
    data:e.message
})
    }
}

exports.getOneProduct=async(req,res)=>{
    try{
        const {id}=req.params
        const finder= await product.findByPk(id)

        if(!finder){
            return res.status(404).json({
                message:"product with this id not found"
            })
        }

        res.status(200).json({
            message:"product found successfully",
            data:finder
        })
    }catch(e){
        res.status(500).json({
    message:"there is a server error",
    data:e.message
})
    }
}

exports.updateProduct=async(req,res)=>{
try{
    const {id}=req.params
    const {productName,productPrice}=req.body


    
   const finder= await product.findByPk(id)

   if(!finder){
    return res.status(404).json({
        message:"please provide a valid id "
    })
   }

      const data={
    productName,productPrice,
   }

   if(req.file){
 const oldPath= finder.productImage
 fs.unlinkSync(oldPath)
 
 const newPath=req.file.path

 data.productImage=newPath
   }




   const updated= await product.update(data,{where:{id}})

   res.status(200).json({
    message:"field updated successfully",
    data:updated
   })
}catch(e){
        res.status(500).json({
    message:"there is a server error",
    data:e.message
})
}
}

exports.deleteProduct= async(req,res)=>{
    try{
     const {id}=req.params
     const finder= await product.findByPk(id)

     if(!finder){
       return res.status(404).json({
            message:"product with this id not found"
        })
     }
 const oldImage= finder.productImage

 fs.unlinkSync(oldImage)

  const deleted= await product.destroy({where:{id}})

  res.status(200).json({
    message:"user deleted successfully",
    data:deleted
  })
    
    }catch(e){
             res.status(500).json({
    message:"there is a server error",
    data:e.message
}) 
    }
}
