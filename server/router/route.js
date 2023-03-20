const express = require('express');

const router = express.Router();

const service = require('../service/render');
const controller = require('../controller/controller');

router.get('/', service.homeRoute)

router.get('/add-user', service.addUser)

router.get('/update-user', service.updateUser)

// API
router.post('/api/users', controller.createUser);
router.get('/api/users', controller.findAndGetUser);
router.put('/api/users/:id', controller.updateUser);
router.delete('/api/users/:id', controller.deleteUser);


module.exports = router;