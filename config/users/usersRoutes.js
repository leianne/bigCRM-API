const router = require('express').Router();
const db = require('./usersModel');


router.get('/', async (req, res) => {
    try {
        const users = await db.getUsers();
        res.send(users)
    }
    catch(error) {
        res.status(500).json({message: error})
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id)
    try{
        const user = await db.getUser(id);
        res.send(user)
    }
    catch(error) {
        res.status(500).json({message: error})
    }
})

router.post('/', async (req, res) => {
    const user = req.body;
    console.log(user)
    try {
        const newUser = await db.addUser(user);
        res.send(newUser)
    }
    catch(error) {
        res.status(500).json({message: error})
    }
})

module.exports = router