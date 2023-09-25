const View = require('./View');
const LottoMaker = require('./LottoMaker');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.view = new View({
      saveWinningNumber: (number) => (this.lotto = new Lotto(number.split(','))),
      saveBounusNumber: (number) => {
        this.lotto.saveBonusNumber(number);
        this.view.printWinningResult(this.lotto.makewinningResult(this.lottoMaker.lottos));
      },
    });
    this.lottoMaker = new LottoMaker((lottos) => this.view.printLottos(lottos));
  }

  play() {
    this.view.inputPurchaseAmount((number) => this.lottoMaker.makeLotto(number));
  }
}

const app = new App();
app.play();

module.exports = App;
