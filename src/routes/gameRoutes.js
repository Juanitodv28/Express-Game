const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();

router.get('/', gameController.getGames);
router.get('/:id', gameController.getGame);

module.exports = router;