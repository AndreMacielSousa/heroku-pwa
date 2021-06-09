const updates = require('../models/updates.model');
const {
    validationResult
} = require('express-validator');
const updatesMessages = require("../messages/updates.messages");

exports.get = (req, res) => {
    updates.find(req.query, (error, updates) => {
        if (error) throw error;
        let message = updatesMessages.success.s2;

        if (updates.length < 0)
            message = updatesMessages.success.s5;

        message.body = updates;
        return res.status(message.http).send(message);
    });
}

exports.create = (req, res) => {

    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    new updates({
        name: req.body.name,
        type: req.body.type
    }).save((error, updates) => {
        if (error) throw error;
        let message = updatesMessages.success.s0;
        message.body = updates;
        return res.header("location", "/updates/" + updates._id).status(message.http).send(message);
    });

}

exports.update = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    updates.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set: req.body
    }, {
        new: true
    }, (error, updates) => {
        if (error) throw error;
        if (!updates) return res.status(updatesMessages.error.e0.http).send(updatesMessages.error.e0);

        let message = updatesMessages.success.s1;
        message.body = updates;
        return res.status(message.http).send(message);

    });
}

exports.delete = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    updates.deleteOne({
        _id: req.params.id
    }, (error, result) => {
        if (error) throw error;
        if (result.deletedCount <= 0) return res.status(updatesMessages.error.e0.http).send(updatesMessages.error.e0);
    });

    return res.status(updatesMessages.success.s3);
}

exports.getOne = (req, res) => {

    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    updates.findOne({
        _id: req.params.id
    }, (error, updates) => {
        if (error) throw error;
        if (!updates) return res.status(updatesMessages.error.e0.http).send(updatesMessages.error.e0);
        let message = updatesMessages.success.s2;
        message.body = updates;
        return res.status(message.http).send(message);
    });

}

exports.activate = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    updates.updateOne({
        _id: req.params.id
    }, {
        $set: {
            active: true
        }
    }, (error, result) => {
        if (error) throw error;

        if (result.n <= 0) return res.status(updatesMessages.error.e0.http).send(updatesMessages.error.e0);
        return res.status(updatesMessages.success.s6.http).send(updatesMessages.success.s6);

    });
}

exports.deactivate = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    updates.updateOne({
        _id: req.params.id
    }, {
        $set: {
            active: false
        }
    }, (error, result) => {
        if (error) throw error;

        if (result.n <= 0) return res.status(updatesMessages.error.e0.http).send(updatesMessages.error.e0);
        return res.status(updatesMessages.success.s4.http).send(updatesMessages.success.s4);

    });
}