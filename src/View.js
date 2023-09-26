const MissionUtils = require('@woowacourse/mission-utils');

class View {
  constructor({ saveWinningNumber, saveBounusNumber }) {
    this.saveWinningNumber = saveWinningNumber;
    this.saveBounusNumber = saveBounusNumber;
  }

  inputPurchaseAmount(callback) {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (answer) => {
      if (isNaN(Number(answer)) || answer === undefined || answer === null || answer === '') {
        throw new Error('[ERROR] 입력값이 올바르지 않습니다.');
      }

      if (answer % 1000 === 0) {
        this.inputMoney = answer;
        const lottosNumber = answer / 1000;
        return callback(lottosNumber);
      }

      MissionUtils.Console.print('1000원으로 나누어떨어지지 않습니다. 다시 입력해주세요.');
      this.inputPurchaseAmount(callback);
    });
  }

  // ✅
  printLottos(lottos) {
    lottos.forEach((lotto) => {
      const lottoString = JSON.stringify(lotto).replace(/,/g, ', '); // 로또 배열을 JSON 문자열로 변환하고 각 숫자 사이에 공백 추가
      MissionUtils.Console.print(lottoString); // JSON 문자열을 출력
    });
    this.inputWinningNumber();
  }

  inputWinningNumber() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (number) => {
      this.saveWinningNumber(number);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (number) => this.saveBounusNumber(number));
  }

  printWinningResult(result) {
    const rateOfReturn =
      (result.reduce((acc, cur) => {
        acc += cur['money'] * cur['count'];
        return acc;
      }, 0) /
        this.inputMoney) *
      100;

    MissionUtils.Console.print(`
    3개 일치 (5,000원) - ${result[0].count}개
    4개 일치 (50,000원) - ${result[1].count}개
    5개 일치 (1,500,000원) - ${result[2].count}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[3].count}개
    6개 일치 (2,000,000,000원) - ${result[4].count}개
    총 수익률은 ${Math.round(rateOfReturn * 10) / 10}%입니다.
    `);
  }
}

module.exports = View;
