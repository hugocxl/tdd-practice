type Iteratee<T, B> = string | ((val: T) => B)

export function countBy<T, B>(value: T[], iteratee: Iteratee<T, B>) {
  const output: Record<ReturnType<Iteratee<T, B>>, number> = {}

  for (const val of value) {
    const key = typeof iteratee === 'function' ? iteratee(val) : val[iteratee]
    output[key] = (output[key] || 0) + 1
  }

  return output
}
