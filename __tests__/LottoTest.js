const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 당첨 번호에 중복되는 값이 있으면 안됩니다.');
  });

  // 아래에 추가 테스트 작성 가능
  test('로또 번호가 1부터 45사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 입력값이 모두 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 'f', 6]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호의 입력값이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]).saveBonusNumber('f');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호의 입력값이 1부터 45사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]).saveBonusNumber(46);
    }).toThrow('[ERROR]');
  });
});
