const MissionUtils = require('@woowacourse/mission-utils');
const View = require('./View');
const LottoMaker = require('./LottoMaker');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.view = new View();
    this.lottoMaker = new LottoMaker((lottos) => {
      this.view.printLottos(lottos);
      this.inputWinningNumber();
    });
  }

  play() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (answer) => {
      if (answer % 1000 === 0) {
        const lottosNumber = answer / 1000;
        return this.lottoMaker.makeLotto(lottosNumber);
      }

      MissionUtils.Console.print('1000원으로 나누어떨어지지 않습니다. 다시 입력해주세요.');
      this.play();
    });
  }

  inputWinningNumber() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (number) => {
      this.lotto = new Lotto(number.split(','));
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (number) => {
      this.lotto.handleBonusNumber(number);
      this.lotto.makewinningResult(this.lottoMaker.lottos);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
