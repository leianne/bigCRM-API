const db = require('../../data/dbConfig');

module.exports = {
    getCustomers,
    addCustomer
}

function getCustomers(locationID) {
    return  db('customers').where(locationID)
}

function addCustomer(customer) {
    const [id] = await db('customers').insert(customer);
    const  newCustomer = db('customers').where({customerID: id})
    return newCustomer
}