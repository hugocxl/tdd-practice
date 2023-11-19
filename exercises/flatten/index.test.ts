import { describe, test, expect } from 'vitest'
import { flatten } from '.'

describe('flatten', () => {
  test('it should exists', () => {
    expect(flatten).toBeDefined()
  })
  test('given "[]" it should return "[]"', () => {
    const result = flatten([])

    expect(result).toStrictEqual([])
  })
  test('given "[2,3]" it should return "[2,3]"', () => {
    const result = flatten([2, 3])

    expect(result).toStrictEqual([2, 3])
  })
  test('given "[2,[3]]" it should return "[2,3]"', () => {
    const result = flatten([2, [3]])

    expect(result).toStrictEqual([2, 3])
  })
  test('given "[2,[3,4]]" it should return "[2,3,4]"', () => {
    const result = flatten([2, [3, 4]])

    expect(result).toStrictEqual([2, 3, 4])
  })
  test('given "[1, [2, [3, [4, [5]]]]]" it should return "[1, 2, 3, 4, 5]"', () => {
    const result = flatten([1, [2, [3, [4, [5]]]]])

    expect(result).toStrictEqual([1, 2, 3, 4, 5])
  })
})
