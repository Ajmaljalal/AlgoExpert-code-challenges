// Solution One
// O(nlogn) time | O(n) space
const sortedSquaredArray1 = (array: number[]) => {
  return array.map(number => {
    return (number) * (number)
  })
    .sort((a, b) => a - b)
}

// Solution Two
// O(n) time | O(n)
const sortedSquaredArray2 = (array: number[]) => {
  let startIndex: number = 0;
  let endIndex: number = array.length - 1
  let sorteArrayIndex: number = array.length - 1
  const sortedSquareArr: number[] = []
  while (endIndex >= startIndex) {
    const startAbsNum = Math.abs(array[startIndex])
    const endAbsNum = Math.abs(array[endIndex])
    if (startAbsNum > endAbsNum) {
      sortedSquareArr[sorteArrayIndex] = startAbsNum * startAbsNum
      startIndex += 1
    }
    if (startAbsNum <= endAbsNum) {
      sortedSquareArr[sorteArrayIndex] = endAbsNum * endAbsNum
      endIndex -= 1
    }
    sorteArrayIndex--
  }
  return sortedSquareArr
}