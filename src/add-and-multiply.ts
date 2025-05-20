import { add, times } from './calculator';

const addAndMultiply = (
  numberOne: number,
  numberTwo: number,
  numberThree: number,
): number => times(add(numberOne, numberTwo), numberThree)

export default addAndMultiply;