'use strict';

const fs = require('fs'),
YotiClient = require('yoti-node-sdk');

const CLIENT_SDK_ID = '2deac44e-7906-4939-833e-a9e6b42ca5a7';
const PEM = fs.readFileSync(__dirname + '/../../config/keys/yotiKey.pem');
var yotiClient = new YotiClient(CLIENT_SDK_ID, PEM);

exports.getYotiProfile = function(token) {
        let promise = yotiClient.getActivityDetails(token)
        promise.then((activityDetails) => {
            var userDetails = {
            userId: activityDetails.getUserId(),
            profile: activityDetails.getUserProfile(),
            outcome: activityDetails.getOutcome()
        }
        return userDetails;
        }).catch((err) => {
            return err;
    });

}