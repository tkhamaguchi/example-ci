import { exception } from 'console';
import { decorateText } from './server';

describe('sample test', () => {
  it('引数なしの場合、引数初期値で処理されること', () => {
    const result = decorateText();
    expect(result).toBe('[test]');
  });
  it('引数ありの場合、引数で処理されること', () => {
    const result = decorateText('example');
    expect(result).toBe('[example]');
  });
});
