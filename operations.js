function frequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
}

function numsArray(numStrings) {
    let result = [];

    for (let i = 0; i < numStrings.length; i++) {
        let val = Number(numStrings[i]);

        if (Number.isNaN(val)) {
            return new Error(
                `The value '${numStrings[i]}' at index ${i} is not a valid number`
            );
        }

        result.push(val);
    }
    return result;
}

function findMean(nums) {
    if(nums.length === 0) return 0;
    return nums.reduce(function (acc, cur) {
        return acc + cur;
    }) / nums.length
}

function findMedian(nums){
    nums.sort((a, b) => a - b);

    let middle = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middle] + nums[middle - 1]) / 2;
    } else {
        median = nums[middle];
    }
    return median;
}

function findMode(arr) {
    let counter = frequencyCounter(arr);

    let count = 0;
    let mostFrequent;

    for (let key in counter) {
        if (counter[key] > count) {
            mostFrequent = key;
            count = counter[key];
        }
    }

    return +mostFrequent;
}






module.exports = {
    frequencyCounter,
    numsArray,
    findMean,
    findMedian,
    findMode
};