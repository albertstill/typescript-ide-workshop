import { add as addNumbers, times } from './calculator';

export default function addAndMultiply(
  numberOne: number,
  numberTwo: number,
  numberThree: number,
): number {
  return times(addNumbers(numberOne, numberTwo), numberThree);
}
