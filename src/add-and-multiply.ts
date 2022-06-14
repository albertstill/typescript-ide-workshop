import { add, times } from './calculator';

export default function addAndMultiply(
  numberOne: number,
  numberTwo: number,
  numberThree: number,
): number {
  return times(add(numberOne, numberTwo), numberThree);
}
