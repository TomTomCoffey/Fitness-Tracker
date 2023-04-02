const express = require('express');
const model = require('../models/users');
const router = express.Router();

router
    .get('/', (req, res) => {
        const list = model.getUser();
        res.send(list)
    })

    .get('/search/:q', (req, res) => {
        const term = req.params.q;
        console.log({ term });
        const list = model.searchUser(term);
        res.send(list);
    })

    .get('/:id', (req, res) => {
        const id = +req.params.id;
        const user = model.getUserById(id);
        res.send(user);
    })

    .post('/', (req, res) => {
        const user = req.body;

        console.log({ user });
        console.log( req.query );
        console.log( req.params );
        console.log( req.headers );

        model.addUser(user);
        res.send(user);
    })

    .patch('/:id', (req, res) => {
        const user = req.body;
        model.updateUser(user);
        res.send(user);
    })

    .delete('/:id', (req, res) => {
        const id = +req.params.id;
        model.deleteUser(id);
        res.send({id});
    })

module.exports = router;

/*  Ways to pass information to the server:
    1. Query String Parameters
    2. Route Parameters
    3. Request Body
    4. Request Headers
    5. Cookies
*/