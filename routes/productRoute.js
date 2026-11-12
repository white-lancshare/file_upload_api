const router= require('express').Router()
const {upload}=require('../middleware/multer')
const {createProduct,getAll,deleteProduct,updateProduct}=require('../controllers/productController')

router.post('/createProduct',upload.single('productImage'),createProduct)
router.get('/allProduct',getAll)
router.delete('/deleteProduct/:id',deleteProduct)
router.put('/updateProduct/:id',upload.single('productImage'),updateProduct)

module.exports=router