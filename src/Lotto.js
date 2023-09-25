class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.find((number) => +number < 1 || +number > 45)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
    if (numbers.length !== new Set([...numbers]).size) {
      throw new Error('[ERROR] 로또 번호에 중복되는 값이 있으면 안됩니다.');
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
