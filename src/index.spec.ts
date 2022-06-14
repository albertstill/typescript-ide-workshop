import addAndMultiply from './add-and-multiply';
import { add, times } from './calculator';

it('adds 3 and 6', () => {
  expect(add(3, 6)).toEqual(9);
});

it('multiplies 4 and 3', () => {
  expect(times(4, 3)).toEqual(12);
});

it('adds 3 and 6 then multiplies by 2', () => {
  expect(addAndMultiply(3, 6, 2)).toEqual(18);
});
