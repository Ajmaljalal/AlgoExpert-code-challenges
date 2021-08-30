
// solution one
function twoNumberSum(array: number[], targetSum: number) {
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






