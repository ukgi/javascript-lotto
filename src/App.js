const MissionUtils = require('@woowacourse/mission-utils');
const View = require('./View');
const LottoMaker = require('./LottoMaker');

class App {
  constructor() {
    this.view = new View();
    this.lottoMaker = new LottoMaker((lottos) => {
      this.view.printLottos(lottos);
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
}

const app = new App();
app.play();

module.exports = App;
