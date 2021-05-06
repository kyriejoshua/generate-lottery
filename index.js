const BASIC_LENGTH = 5;
const EXTRA_LENGTH = 2;

const BASIC_MAX = 36;
const EXTRA_MAX = 13;

const basicData = new Array(BASIC_LENGTH).fill(BASIC_LENGTH);
const extraData = new Array(EXTRA_LENGTH).fill(EXTRA_LENGTH);

const basicLottery = basicData.map(() => {
  return parseInt(Math.random() * 1000) % BASIC_MAX;
});

const extraLottery = extraData.map(() => {
  return parseInt(Math.random() * 1000) % EXTRA_MAX;
});

const myLottery = [...basicLottery, ...extraLottery];

console.info(basicData, extraData, myLottery);
