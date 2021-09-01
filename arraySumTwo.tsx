
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
    const numbersCheck: {[key:number]: boolean} = {}
    for (const num of arr) {
        const potentialMatch = targetSum - num;
        if (potentialMatch  in numbersCheck) {
            return [potentialMatch, num];
        }else {
            numbersCheck[num] = true;
        }
    }
}







