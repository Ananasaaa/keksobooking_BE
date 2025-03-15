const MIN_X = 35.65000;
const MAX_X = 35.70000;
const MIN_Y = 139.70000;
const MAX_Y = 139.80000;

const MIN_PRICE = 1000;
const MAX_PRICE = 100000;

const MIN_ROOMS = 1;
const MAX_ROOMS = 5;

const MIN_GUESTS = 1;
const MAX_GUESTS = 10;

const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECK_TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const TITLES = [
  'Cozy accommodation in Tokyo',
  'Comfortable apartment in the city center',
  'Luxurious house with an ocean view',
  'Studio apartment with modern renovations',
  'Spacious house for a big family',
  'Apartment near the park',
  'House with a beautiful garden',
  'Cozy bungalow by the sea',
  'Apartments in the historic center',
  'Apartment with a panoramic city view',
];

const DESCRIPTIONS = [
  'Perfect for a family vacation',
  'Close to shops and restaurants',
  'Fully furnished',
  'Near public transport stops',
  'Great view of nature',
  'Modern interior',
  'Affordable price',
  'Quiet and safe neighborhood',
  'Close to the city center',
  'Suitable for long-term rental'
];

 module.exports = {
    TYPES,
    TITLES,
    CHECK_TIMES,
    FEATURES,
    PHOTOS,
    DESCRIPTIONS,
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
 }