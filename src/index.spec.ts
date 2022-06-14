import multiply from './multiply'
import add from './add'

it('adds 3 and 6', () => {
    expect(add(3, 6)).toEqual(9)
});

it('multiplies 4 and 3', () => {
    expect(multiply(4, 3)).toEqual(12)
});