'use strict';
 
const mongoose = require('mongoose');
const Planet = mongoose.model('Planet');

exports.getById = (req, res, next) => {
    Planet
        .findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send({
                 message: 'Falha ao consultar o planeta pelo Id!',
                 data: e
            });
        });
}

exports.getByName = (req, res, next) => {
    Planet
        .find({
            name: req.params.name
        })
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send({
                 message: 'Falha ao consultar o planeta pelo nome!',
                 data: e
            });
        });
}

exports.get = (req, res, next) => {
    Planet
        .find({}, 'name weather land')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send({
                 message: 'Falha ao listar o planeta!',
                 data: e
            });
        });
}

exports.post = (req, res, next) => {
    var planet = new Planet(req.body);
     planet
        .save()
        .then(x => {
            res.status(201).send({ message: 'Planeta cadastrado com sucesso!'});
        }).catch(e => {
            res.status(400).send({
                 message: 'Falha ao cadastrar o planeta!',
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
    Planet
        .findOneAndRemove(req.body.id)
        .then(x => {
            res.status(200).send({
                message: 'Planeta removido.'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao deletar planeta.',
                data: e
            });
        });
};

