const express = require('express');
const router = express.Router();
const linkController = require('../app/Controller/LinkController');
router.post('/add', linkController.addNew);
router.get('/all', linkController.getAll);
module.exports = router;
