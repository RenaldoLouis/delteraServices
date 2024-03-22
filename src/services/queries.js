const Pool = require('pg').Pool
const pool = new Pool({
    user: 'renaldolouis',
    host: 'localhost',
    database: 'delterademo',
    password: 'password',
    port: 5432,
})

const getUsers = (callback) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            return callback(error);
        }
        return callback(null, results.rows);
    });
};

const getUserById = (params, callback) => {
    const { id } = params;

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            return callback(error);
        }
        return callback(null, results.rows);
    })
};

const createUser = (params, callback) => {
    const { name, email } = params

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
            return callback(error);
        }
        return callback(null, results.rows);
    })
}

const updateUser = (id, userData, callback) => {
    const { name, email } = userData

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results.rows);
        }
    )
}

// const updateUser = (request, response) => {
//     const id = parseInt(request.params.id)
//     const { name, email } = request.body

//     pool.query(
//         'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//         [name, email, id],
//         (error, results) => {
//             if (error) {
//                 throw error
//             }
//             response.status(200).send(`User modified with ID: ${id}`)
//         }
//     )
// }

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}