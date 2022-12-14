
const express = require('express');
const bodyParser = require('body-parser');
const Promos = require('../models/promotions');
const authenticate = require('../authenticate');
const promoRouter = express.Router();
const cors = require('./cors');

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.options(cors.corsWithOptions,(req,res) =>  { res.sendStatus(200); })
.get(cors.cors, (req,res,next) => {
    Promos.find({})
    .then((promos) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promos);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Promos.create(req.body)
    .then((promo) => {
        console.log('Promo created', promo);
        res.statusCode = 200;
        res.setHeader('ContentType','application/json');
        res.json(promo); 
    })
    .catch((err)=>{next(err)})
})
.put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Promos.remove({})
    .then((response) => {
        res.statusCode = 200;
        res.setHeader('ContentType', 'application/json');
        res.json(response)
    })
    .catch((err) => next(err))
});

promoRouter.route('/:promoId')
.options(cors.corsWithOptions,(req,res) =>  { res.sendStatus(200); })
.get(cors.cors, (req,res,next) => {
    Promos.findById(req.params.promoId)
    .then((promo) => {
        res.statusCode = 200;
        res.setHeader('ContentType', 'application/json');
        res.json(promo)
    })
    .catch((err) => next(err))
})
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions/'+ req.params.promoId);
})
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Promos.findByIdAndUpdate(req.params.promoId,{
        $set: req.body
    }, { new:true })
    .then((promo) => {
        console.log('Promo Updated ' + promo);
        res.statusCode = 200;
        res.setHeader('ContentType', 'application/json')
        res.json(promo)
    })
    .catch((err) => next(err))
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Promos.findByIdAndRemove(req.params.promoId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err)); 
});

module.exports = promoRouter;