const router  = require('express').Router();
const db = require('./customersModel');

router.get('/', async (req, res) => {
    try {
        const customers = await db.getCustomers();

    }
    catch(error) {
        res.status(500).json({message: error})
    }
})

module.exports = router