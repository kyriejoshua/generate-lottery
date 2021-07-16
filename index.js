const BASIC_LENGTH = 5;
const EXTRA_LENGTH = 2;

const BASIC_MAX = 36;
const EXTRA_MAX = 13;

const getStyle = () => {
  const basicColor = 'color:white;';
  const extraColor = 'color:black;';
  const basicStyle = 'width: 24px;height: 24px;line-height: 24px;display: inline-block;font-weight: bold;background-size: 100%;border-radius: 50%;padding: 4px';
  const basicBackground = 'background:url(https://static.sporttery.cn/res_1_0/tcw/images/ico-lt.png) no-repeat center;';
  const extraBackground = 'background:url(https://static.sporttery.cn/res_1_0/tcw/images/ico-lt1.png) no-repeat center;';
  const basicColorString = `${basicBackground}${basicColor}${basicStyle}`;
  const extraColorString = `${extraBackground}${extraColor}${basicStyle}`;

  return {
    basicColorString,
    extraColorString
  }
}

/**
 * transform number to string type
 * e.g. 1 => '01'
 * @param {Number} lottery
 * @returns
 */
const toLocaleLottery = (lottery) => lottery < 10 ? '0' + lottery.toLocaleString() : lottery.toLocaleString();

/**
 * generate a lottery number list
 * @param {Number} len total length
 * @param {Number} max max lottery
 * @returns
 */
const generateNumber = (len, max) => {
  let count = len;
  let arr = [];

  while (count) {
    const lottery = parseInt(Math.random() * 1000) % max;
    if (!arr.includes(lottery)) {
      arr.push(lottery);
      count--;
    }
  }

  return arr.map(toLocaleLottery);
}

const generateBasicLottery = () => generateNumber(BASIC_LENGTH, BASIC_MAX);

const generateExtraLottery = () => generateNumber(EXTRA_LENGTH, EXTRA_MAX);

export const generateLottery = () => {
  const myLottery = [...generateBasicLottery(), ...generateExtraLottery()];
  return myLottery;
}

const printRainbowLottery = () => {
  const { basicColorString, extraColorString } = getStyle();
  const consoleType = '%c%s';
  const myLottery = generateLottery();
  myLottery.forEach((lotteryNumber, index) => {
    const rainbowStyle = index < BASIC_LENGTH ? basicColorString : extraColorString;
    setTimeout(console.log, EXTRA_LENGTH * index * 1000, consoleType, rainbowStyle, lotteryNumber);
  });
  setTimeout(console.log, EXTRA_LENGTH * myLottery.length * 1000, consoleType, 'color:#D40061', 'Congratulations ！！！');
}

export default printRainbowLottery;
