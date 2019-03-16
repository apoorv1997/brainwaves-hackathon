const mongoose = require('mongoose');
const shortid = require('shortid');
const ClientModel = mongoose.model('clientdatas');
const SampleModel = mongoose.model('sgdatas');

let findSampleData = (req, res) => {
    SampleModel.find().exec((err, result) => {
        if(err) {
            res.send({
                statusCode:500,
                message:err
            })
        } else if(result == null) {
            res.send({
                statusCode:404,
                message:'No data found'
            })
        } else {
            res.send({
                statusCode:200,
                message:'All Sample SG Data Found',
                data:result
            })
        } 
    })
}

let findClientData = (req, res) => {
    ClientModel.find().exec((err, result) => {
        if(err) {
            res.send({
                statusCode:500,
                message:err
            })
        } else if(result == null) {
            res.send({
                statusCode:404,
                message:'No data found'
            })
        } else {
            res.send({
                statusCode:200,
                message:'All Client Data Found',
                data:result
            })
        }
    })
}

module.exports = {
    findSampleData:findSampleData,
    findClientData:findClientData
}