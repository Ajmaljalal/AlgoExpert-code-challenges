
// Solution One
// O(n^2) time | O(1) space
const twoNumberSum1 = (array: number[], targetSum: number) => {
    let output: number[] = []
    for (var i = 0; i < array.length; i++) {
        var remaininPart = array.slice(i + 1)
        if (remaininPart.length) {
            remaininPart.forEach(num => {
                if ((num) + array[i] === targetSum) {
                    output = [array[i], num]
                    return output
                }
            })
        }
    }
    return output
}

// Solution Two
// O(n) time | O(n) space
const twoNumberSum2 = (arr: number[], targetSum: number) => {
    const numbersCheck: { [key: number]: boolean } = {}
    for (const num of arr) {
        let secondNumber
        let firstNumber
        const potentialMatch = targetSum - num;
        if (potentialMatch in numbersCheck) {
            firstNumber = potentialMatch
            secondNumber = num
            return [firstNumber, secondNumber];
        } else {
            numbersCheck[num] = true;
        }
    }
    return []
}

// Solution Three
// O(nlog(n)) time | O(1) space
const twoNumberSum3 = (arr: number[], targetSum: number) => {
    arr.sort((a,b)=> a-b)
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex < rightIndex) {
        const sumOfTwoIndexValues = arr[leftIndex] + arr[rightIndex];
        if (sumOfTwoIndexValues === targetSum) {
            return [arr[leftIndex], arr[rightIndex]];
        } else if (sumOfTwoIndexValues < targetSum) {
            leftIndex++;
        } else if (sumOfTwoIndexValues > targetSum) {
            rightIndex--;
        }
    }
    return []
}







