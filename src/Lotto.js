const lottoMoney = require('../constant/lottoMoney');
const Validator = require('../utils/Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    Validator.validateWinningNumber(numbers);
  }

  saveBonusNumber(number) {
    Validator.validateBonusNumber(number);
    this.bonusNumber = number;
  }

  // TODO: 추가 기능 구현
  makewinningResult(lottos) {
    let count = 0;
    lottos.forEach((lottoArr) => {
      this.#numbers.forEach((winningNum) => {
        lottoArr.includes(+winningNum) ? (count += 1) : count;
      });
      if (count === 3) lottoMoney[0].count += 1;
      if (count === 4) lottoMoney[1].count += 1;
      if (count === 5) {
        const numbers = [...this.#numbers];
        numbers.splice(
          this.#numbers.findIndex((winningNum) => !lottoArr.includes(+winningNum)),
          1,
          +this.bonusNumber
        );
        numbers.every((winningNum) => lottoArr.includes(+winningNum))
          ? (lottoMoney[3].count += 1)
          : (lottoMoney[2].count += 1);
      }
      if (count === 6) lottoMoney[4].count += 1;
      count = 0;
    });
    return lottoMoney;
  }
}

module.exports = Lotto;
