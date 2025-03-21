const express = require('express');
const router = express.Router();
const { rentMovie } = require('../controllers/rentController');
const verifyToken = require('../middlewares/authMiddleware');

router.post('/rent', verifyToken, rentMovie);

module.exports = router;
