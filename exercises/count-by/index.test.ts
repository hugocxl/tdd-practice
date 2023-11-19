import { describe, test, expect } from 'vitest'
import { countBy } from '.'

describe('countBy', () => {
  test('should be defined', () => {
    expect(countBy).toBeDefined()
  })

  describe('knows how many times the key was returned by iteratee when its a function', () => {
    test.each([
      {
        input: [1, 2, 3],
        iteratee: (val: number) => val,
        expected: {
          '1': 1,
          '2': 1,
          '3': 1
        }
      },
      {
        input: [6.1, 4.2, 6.3],
        iteratee: Math.floor,
        expected: { '4': 1, '6': 2 }
      }
    ])(
      'should output $expected when the input is $input and the iteratee is $iteratee',
      ({ input, iteratee, expected }) => {
        expect(countBy<number, number>(input, iteratee)).toStrictEqual(expected)
      }
    )
  })
  describe('knows how many times the key was returned by iteratee when its an object property', () => {
    test.each([
      {
        input: ['one', 'two', 'three'],
        iteratee: 'length',
        expected: { '3': 2, '5': 1 }
      }
    ])(
      'should output $expected when the input is $input and the iteratee is $iteratee',
      ({ input, iteratee, expected }) => {
        expect(countBy<string, number>(input, iteratee)).toStrictEqual(expected)
      }
    )
  })
})
