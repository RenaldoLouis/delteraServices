const { user } = require('../configs/DbConfig.js');
const db = require('../repositories/UserRepository.js')
const helper = require('../utils/DataUtil.js');
const { validationResult } = require('express-validator');

async function get(req, res, next) {
    try {

        const errorValidation = validationResult(req);

        db.getUsers((error, users) => {
            if (error) {
                return next(error);
            }
            if (users.length > 0) {
                res.status(200).json(users);
            } else {
                res.status(201).json(users);
            }
        });
    } catch (err) {
        next(err);
    }
}

async function getById(req, res, next) {
    const id = req.params.id;
    try {
        db.getUserById(id, (error, users) => {
            if (error) {
                return next(error);
            }
            if (users.length > 0) {
                res.status(200).json(users);
            } else {
                res.status(201).json(users);
            }
        });
    } catch (err) {
        next(err);
    }
}

async function create(req, res, next) {
    const body = req.body
    try {
        db.createUser(body, (error, users) => {
            if (error) {
                return next(error);
            }
            res.status(201).send(users)
        });
    } catch (err) {
        next(err);
    }
}

async function update(req, res, next) {
    const id = req.params.id;
    const body = req.body
    try {
        db.updateUser(id, body, (error, users) => {
            if (error) {
                return next(error);
            }
            res.status(201).json(users);
        });
    } catch (err) {
        next(err);
    }
}

async function remove(req, res, next) {
    const id = req.params.id;
    try {
        db.deleteUser(id, (error, users) => {
            if (error) {
                return next(error);
            }
            res.status(200).json(users);
        });
    }
    catch (err) {
        next(err);
    }
}

module.exports = {
    get,
    getById,
    create,
    update,
    remove,
};