class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    }
    if (numbers.find((number) => +number < 1 || +number > 45)) {
      throw new Error('[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
    if (numbers.length !== new Set([...numbers]).size) {
      throw new Error('[ERROR] 당첨 번호에 중복되는 값이 있으면 안됩니다.');
    }

    this.#numbers = numbers.map((number) => +number); // 왜 변환이 안되지
  }

  handleBonusNumber(number) {
    if (number < 1 || number > 45) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }

    this.bonusNumber = number;
  }

  // TODO: 추가 기능 구현
  makewinningResult(lottos) {
    console.log('로또번호', lottos);
    console.log('당첨번호', this.#numbers);
    console.log('보너스번호', this.bonusNumber);
    let count = 0;
    this.#numbers.forEach((number) => {
      lottos.forEach((lotto) => (lotto.find((num) => num === +number) ? (count += 1) : count));
    });
    console.log('일치하는 갯수', count);
  }
}

module.exports = Lotto;
