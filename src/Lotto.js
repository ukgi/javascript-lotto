const lottoMoney = [
  {
    money: 5000,
    count: 0,
  },
  {
    money: 50000,
    count: 0,
  },
  {
    money: 1500000,
    count: 0,
  },
  {
    money: 30000000,
    count: 0,
  },
  {
    money: 2000000000,
    count: 0,
  },
];

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers === undefined || numbers === null) {
      throw new Error('[ERROR] 입력값이 올바르지 않습니다.');
    }

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    }
    if (numbers.find((number) => +number < 1 || +number > 45)) {
      throw new Error('[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
    if (numbers.length !== new Set([...numbers]).size) {
      throw new Error('[ERROR] 당첨 번호에 중복되는 값이 있으면 안됩니다.');
    }
  }

  saveBonusNumber(number) {
    if (number === undefined || number === null) {
      throw new Error('[ERROR] 입력값이 올바르지 않습니다.');
    }
    if (number < 1 || number > 45) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }

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
