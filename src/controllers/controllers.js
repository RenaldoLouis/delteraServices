const db = require('../services/queries')

async function get(req, res, next) {
    try {
        db.getUsers((error, users) => {
            if (error) {
                console.error(`Error while getting data`, error.message);
                return next(error);
            }
            res.status(200).json(users);
        });
    } catch (err) {
        console.error(`Error while getting data`, err.message);
        next(err);
    }
}

async function getById(req, res, next) {
    const id = req.params.id;
    try {
        db.getUserById(id, (error, users) => {
            if (error) {
                console.error(`Error while getting data`, error.message);
                return next(error);
            }
            res.status(200).json(users);
        });
    } catch (err) {
        console.error(`Error while getting data`, err.message);
        next(err);
    }
}

async function create(req, res, next) {
    const body = req.body
    try {
        db.createUser(body, (error, users) => {
            if (error) {
                console.error(`Error while create user`, error.message);
                return next(error);
            }
            res.status(200).send(`User created Succesfully`)
        });
    } catch (err) {
        console.error(`Error while create user`, err.message);
        next(err);
    }
}

async function update(req, res, next) {
    const id = req.params.id;
    const body = req.body
    try {
        db.updateUser(id, body, (error, users) => {
            if (error) {
                console.error(`Error while updating data`, error.message);
                return next(error);
            }
            res.status(200).json(users);
        });
    } catch (err) {
        console.error(`Error while updating data`, err.message);
        next(err);
    }
}

async function remove(req, res, next) {
    try {
        res.json(await programmingLanguages.remove(req.params.id));
    } catch (err) {
        console.error(`Error while deleting data`, err.message);
        next(err);
    }
}

module.exports = {
    get,
    getById,
    create,
    update,
    remove
};