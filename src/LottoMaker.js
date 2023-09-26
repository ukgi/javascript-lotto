const MissionUtils = require('@woowacourse/mission-utils');

const LOTTO_COUNTS = 6;
const MIN_LOTTO_NUMBER = 1;
const MAX_LOTTO_NUMBER = 45;

class LottoMaker {
  constructor(returnLottos) {
    this.lottos;
    this.returnLottos = returnLottos;
  }

  makeLotto(number) {
    MissionUtils.Console.print(`${number}개를 구매했습니다.`);
    const lottos = [];
    for (let i = 0; i < number; i++) {
      lottos.push(
        MissionUtils.Random.pickUniqueNumbersInRange(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, LOTTO_COUNTS).sort(
          (a, b) => a - b
        )
      );
    }
    this.lottos = lottos;
    this.returnLottos(lottos);
  }
}

module.exports = LottoMaker;
