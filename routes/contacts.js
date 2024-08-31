const express = require("express");
const contactController = require('../controllers/contacts');
const router = express.Router()

router.get('/contacts', contactController.contactView)

module.exports = router;