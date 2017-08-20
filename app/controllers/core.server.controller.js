'use strict'

const fs = require('fs'),
    YotiClient = require('yoti-node-sdk'),
    pdfGenerator = require('../tools/pdf-generator');

const CLIENT_SDK_ID = '2deac44e-7906-4939-833e-a9e6b42ca5a7';
const PEM = fs.readFileSync(__dirname + '/../../config/keys/yotiKey.pem');
var yotiClient = new YotiClient(CLIENT_SDK_ID, PEM);

exports.renderIndex = function (req, res) {
    res.render('index');
};

exports.renderError = function (req, res) {
    res.render('error');
}

exports.getProfile = function (req, res) {
    let token = req.query.token;
    if (!token) {
        res.render('error', {
            error: "No token has been provided."
        });
        return;
    }

    let promise = yotiClient.getActivityDetails(token)
    promise.then((activityDetails) => {

        //generate pdf
        pdfGenerator.generatePDF(activityDetails.getUserProfile());

        res.json({
            userId: activityDetails.getUserId(),
            profile: activityDetails.getUserProfile(),
            outcome: activityDetails.getOutcome()
        });
    }).catch((err) => {
        console.error(err);
        res.status(400).send({
            error: err
        });
    });
}