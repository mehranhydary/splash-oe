import express from 'express';
let router = express.Router();
var Keys = require('dotenv').config();
var Mailchimp = require('mailchimp-api-v3');

var mcApiKey = process.env.API_KEY;
var mcListId = process.env.LIST_ID;
 
var mailchimp = new Mailchimp(mcApiKey);

router.post('/', (req, res) => {
    let params = req.body.params;
    mailchimp.post(`/lists/${mcListId}/members`, {
       email_address: params.email,
       status: 'subscribed',
       merge_fields: { FNAME: params.firstname, LNAME: params.lastname }
    }).then(function(results) {
       res.json({ msg: 'You are now subscribed to the list!', status: results.statusCode });
    }).catch(function(err) {
       res.json({ msg: err.title, status: err.status });
    });
});

router.get('/', (req, res) => {
    mailchimp.get(`/lists/${mcListId}/members`).then(function(results) {
       res.json({ members: results.members });
    }).catch(function(err) {
       res.json({ errors: err });
    });
});

export default router;