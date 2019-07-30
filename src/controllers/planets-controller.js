'use strict';
 
const mongoose = require('mongoose');
const Planet = mongoose.model('Planet');

exports.post = (req, res, next) => {
    var planet = new Planet(req.body);
     planet
        .save()
        .then(x => {
            res.status(201).send({ message: 'Produto cadastrado com sucesso!'});
        }).catch(e => {
            res.status(400).send({
                 message: 'Falha ao cadastrar o produto!',
                 data: e
            });
        });
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};