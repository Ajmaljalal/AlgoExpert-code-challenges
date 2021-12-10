// Solution One
// O(nlogn) time | O(n) space
const sortedSquaredArray = (array: number[]) => {
    return array.map(number => {
        return (number) * (number)
    }).sort((a, b) => a - b)
}