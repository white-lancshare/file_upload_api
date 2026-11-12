const multer= require('multer')

const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
   
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const fileFilter=(req,file,cb)=>{
    if(file.mimetype.startsWith('image/')){
       cb(null,true)
    }else{
        new Error('you must input an image')
    }
}

const limits={
    fileSize:1024 *1024 *20
}

exports.upload = multer({
    storage,
    fileFilter,
    limits
})