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
  'Уютное жилье в Токио',
  'Комфортная квартира в центре города',
  'Роскошный дом с видом на океан',
  'Квартира-студия с современным ремонтом',
  'Просторный дом для большой семьи',
  'Квартира рядом с парком',
  'Дом с красивым садом',
  'Уютное бунгало у моря',
  'Апартаменты в историческом центре',
  'Квартира с панорамным видом на город',
];

const DESCRIPTIONS = [
  'Идеально подходит для семейного отдыха.',
  'Вблизи магазинов и ресторанов.',
  'Полностью меблировано.',
  'Рядом с остановкой общественного транспорта.',
  'Отличный вид на природу.',
  'Современный интерьер.',
  'Доступная цена.',
  'Тихий и безопасный район.',
  'Близко к центру города.',
  'Подходит для долгосрочной аренды.',
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