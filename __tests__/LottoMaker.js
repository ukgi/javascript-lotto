const LottoMaker = require('../src/LottoMaker');

describe('로또메이커 클래스 테스트', () => {
  let lottoMaker;
  beforeEach(() => {
    const mockFunc = jest.fn();
    lottoMaker = new LottoMaker(mockFunc);
  });

  it('만들어진 로또의 갯수는 makeLotto의 파라미터로 전달한 number와 동일해야한다.', () => {
    const number = 5;
    lottoMaker.makeLotto(number);
    expect(lottoMaker.lottos.length).toBe(5);
  });

  it('로또 하나당 6개를 가지고 있어야한다.', () => {
    lottoMaker.makeLotto(5);
    expect(lottoMaker.lottos.every((lotto) => lotto.length === 6)).toBeTruthy();
  });

  it('로또는 숫자 외 다른값이 들어가서는 안된다.', () => {
    lottoMaker.makeLotto(5);
    lottoMaker.lottos = [[1, 2, 'three', 4, 5, 6]];
    expect(lottoMaker.lottos.every((lotto) => lotto.every((num) => !isNaN(num)))).toBeFalsy();
  });

  it('로또 6개의 숫자는 중복되어서는 안된다.', () => {
    lottoMaker.makeLotto(5);
    lottoMaker.lottos = [[1, 2, 2, 3, 4, 5]];
    expect(lottoMaker.lottos.every((lotto) => lotto.length === new Set([...lotto]).size)).toBeFalsy();
  });

  it('로또는 오름차순으로 정렬된다.', () => {
    lottoMaker.makeLotto(5);
    lottoMaker.lottos = [[2, 3, 4, 5, 6, 1]];
    expect(
      lottoMaker.lottos.every((lotto) =>
        lotto.every((num, i, arr) => {
          if (i === lotto.length - 1) {
            return true;
          }
          return arr[i] < arr[i + 1];
        })
      )
    ).toBeFalsy();
  });
});
