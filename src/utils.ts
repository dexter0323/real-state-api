export const isNumber = (n: number) => {
  return typeof n === 'number' && !isNaN(n)
}
