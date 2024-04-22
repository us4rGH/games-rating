const { createRating, updateRating } = require("./calculations");
const { PATH_TO_RATING_FILE } = require("./config");
const makeRatingFile = require("./rating-file");

module.exports = {
    makeRatingFile,
    PATH_TO_RATING_FILE,
    createRating,
    updateRating
}