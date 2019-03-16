const express = require('express');
const router = express.Router();
const appConfig = require('../config/appConfig');
const userController = require('../controllers/userController');
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
module.exports.setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/docs`;
    app.get(`${baseUrl}/sg`, userController.findSampleData);
    app.get(`${baseUrl}/client`, userController.findClientData);
}