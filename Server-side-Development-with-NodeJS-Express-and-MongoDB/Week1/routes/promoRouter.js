
const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the Promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the Promo: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /Promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all Promo');
});

promoRouter.route('/:promoId')
.all(function (req, res, next) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send details of the Promo: ' + req.params.promoId +' to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /Promotions/'+ req.params.promoId);
})
.put((req, res, next) => {
    res.write('Updating the Promo: ' + req.params.promoId + '\n');
    res.end('Will update the Promo: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting Promo: ' + req.params.leaderId);
});
  
module.exports = promoRouter;