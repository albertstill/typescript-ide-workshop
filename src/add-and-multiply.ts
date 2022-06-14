import { add, multiply } from './calculator';

export default function addAndMultiply(
  numberOne: number,
  numberTwo: number,
  numberThree: number,
): number {
  return multiply(add(numberOne, numberTwo), numberThree);
}
