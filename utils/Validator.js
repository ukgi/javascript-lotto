class Validator {
  static validatePurchaseAmount(answer) {
    if (isNaN(Number(answer)) || answer === undefined || answer === null || answer === '') {
      throw new Error('[ERROR] 입력값이 올바르지 않습니다.');
    }
  }

  static validateWinningNumber(numbers) {
    if (
      [...numbers].join('').length < 6 ||
      isNaN(Number([...numbers].join(''))) ||
      numbers === undefined ||
      numbers === null
    )
      throw new Error('[ERROR] 입력값이 올바르지 않습니다.');
    if (numbers.length !== 6) throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    if (numbers.find((number) => +number < 1 || +number > 45))
      throw new Error('[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.');
    if (numbers.length !== new Set([...numbers]).size)
      throw new Error('[ERROR] 당첨 번호에 중복되는 값이 있으면 안됩니다.');
  }

  static validateBonusNumber(number) {
    if (isNaN(number) || number === undefined || number === null)
      throw new Error('[ERROR] 입력값이 올바르지 않습니다.');
    if (number < 1 || number > 45) throw new Error('[ERROR]  보너스번호는 1부터 45 사이의 숫자여야 합니다.');
  }
}

module.exports = Validator;
