export function flatten(arr: unknown[]) {
  const output: unknown[] = []

  arr.forEach(item => {
    if (Array.isArray(item)) {
      output.push(...flatten(item))
    } else {
      output.push(item)
    }
  })

  return output
}
