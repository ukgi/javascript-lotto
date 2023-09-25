const MissionUtils = require('@woowacourse/mission-utils');

class View {
  constructor() {}

  printLottos(lottos) {
    lottos.map((lotto) => MissionUtils.Console.print(lotto));
  }
}

module.exports = View;
