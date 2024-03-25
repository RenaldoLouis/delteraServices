
const db = require('../repositories/UserRepository.js');

function getUsers() {
    try {
        return new Promise((resolve, reject) => {
            db.getUsers((error, users) => {
                if (error) {
                    reject(error)
                }
                resolve(users)
            });
        })
    } catch (err) {
        next(err);
    }

}

async function getByUserId(req, next) {
    const id = req.params.id;
    try {
        return new Promise((resolve, reject) => {
            db.getUserById(id, (error, users) => {
                if (error) {
                    reject(error)
                }
                resolve(users)
            });
        })

    } catch (err) {
        next(err);
    }
}

async function createUser(req, next) {
    const body = req.body
    try {
        return new Promise((resolve, reject) => {
            db.createUser(body, (error, users) => {
                if (error) {
                    reject(error)
                }
                resolve(users)
            });
        })
    } catch (err) {
        next(err);
    }
}

async function updateUser(req, next) {
    const id = req.params.id;
    const body = req.body
    try {
        return new Promise((resolve, reject) => {
            db.updateUser(id, body, (error, users) => {
                if (error) {
                    reject(error)
                }
                resolve(users)
            });
        })
    } catch (err) {
        next(err);
    }
}

async function deleteUserById(req, next) {
    const id = req.params.id;
    try {
        return new Promise((resolve, reject) => {
            db.deleteUser(id, (error, users) => {
                if (error) {
                    reject(error)
                }
                resolve(users)
            });
        })

    } catch (err) {
        next(err);
    }
}

module.exports = {
    getUsers,
    getByUserId,
    deleteUserById,
    createUser,
    updateUser
};