const games = require('../data/games');

const getAllGames = () => games;

const getGameById = (id) => games.find((game) => game.id === Number(id));

module.exports = { getAllGames, getGameById };