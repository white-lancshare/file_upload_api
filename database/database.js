const {Sequelize}= require('sequelize')

const sequelize= new Sequelize('file_upload','root','root',{
    host:'localhost',
    dialect:'mysql'
})

module.exports=sequelize