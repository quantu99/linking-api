const express = require('express');
const router = express.Router();
const linkController = require('../app/Controller/LinkController');
router.post('/add', linkController.addNew);
module.exports = router;
