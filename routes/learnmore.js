const express = require('express');
const router = express.Router()
const learnMoreController = require('../controllers/learnmore')

router.get('/learnmore', learnMoreController.learnMoreView)

module.exports = router;