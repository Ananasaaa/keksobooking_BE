const {
    MIN_X,
    MAX_X,
    MIN_Y,
    MAX_Y,
    MIN_PRICE,
    MAX_PRICE,
    MIN_ROOMS,
    MAX_ROOMS,
    MIN_GUESTS,
    MAX_GUESTS,
    TYPES,
    CHECK_TIMES,
    FEATURES,
    PHOTOS,
    TITLES,
    DESCRIPTIONS,
  } = require('./constants');
  const {
    getRandomFloat,
    getRandomInt,
    getRandomElement,
    getRandomUniqueArray,
  } = require('./utils');
  
  const generateMockData = (count) => {
      return Array.from({ length: count}, () => {
        const location = {
          x: getRandomFloat(MIN_X, MAX_X),
          y: getRandomFloat(MIN_Y, MAX_Y),
        };
        return {
          author: {
            avatar: `img/avatars/user${String(getRandomInt(1, 8)).padStart(2, '0')}.png`,
          },
          offer: {
            title: getRandomElement(TITLES),
            address: `${location.x}, ${location.y}`,
            price: getRandomInt(MIN_PRICE, MAX_PRICE),
            type: getRandomElement(TYPES),
            rooms: getRandomInt(MIN_ROOMS, MAX_ROOMS),
            guests: getRandomInt(MIN_GUESTS, MAX_GUESTS),
            checkin: getRandomElement(CHECK_TIMES),
            checkout: getRandomElement(CHECK_TIMES),
            features: getRandomUniqueArray(FEATURES),
            description: getRandomUniqueArray(DESCRIPTIONS).join(' '),
            photos: getRandomUniqueArray(PHOTOS),
          },
          location,
        };
      });
    };

module.exports = { generateMockData };