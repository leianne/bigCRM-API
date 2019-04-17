const db = require('../../data/dbConfig');

module.exports = {
    getUsers,
    getUser,
    addUser
}

function getUsers() {
    return db('users')
}

function getUser(userID) {
    return db('users').where({userID})
}

async function addUser(user) {
    const [id] = await db('users').insert(user);
    const newUser = db('users').where({userID: id})
    return newUser
}

