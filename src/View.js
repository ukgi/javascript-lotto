const MissionUtils = require('@woowacourse/mission-utils');

class View {
  constructor({ saveWinningNumber, saveBounusNumber }) {
    this.saveWinningNumber = saveWinningNumber;
    this.saveBounusNumber = saveBounusNumber;
  }

  inputPurchaseAmount(callback) {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (answer) => {
      if (answer % 1000 === 0) {
        const lottosNumber = answer / 1000;
        return callback(lottosNumber);
      }

      MissionUtils.Console.print('1000원으로 나누어떨어지지 않습니다. 다시 입력해주세요.');
      this.inputPurchaseAmount();
    });
  }

  printLottos(lottos) {
    lottos.map((lotto) => MissionUtils.Console.print(lotto));
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
}

module.exports = View;
