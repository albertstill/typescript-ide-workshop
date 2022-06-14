import multiply from './multiply';
import add from './add';

export default function addAndMultiply(
  numberOne: number,
  numberTwo: number,
  numberThree: number,
): number {
  return multiply(add(numberOne, numberTwo), numberThree);
}
