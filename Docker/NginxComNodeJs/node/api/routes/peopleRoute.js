'use strict';

const express = require('express');
const router = express.Router();
const peopleController = require('../controllers/peopleController')

router.post('/people', peopleController.newPerson);
router.get('/people', peopleController.getPeople);

module.exports = router;