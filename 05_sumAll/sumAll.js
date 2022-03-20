const sumAll = function(startNum, endNum) {

    if(typeof startNum != 'number' || typeof endNum != 'number' || startNum < 0 || endNum < 0)
    {
        return "ERROR";
    }

    let newStartNum;
    let newEndNum;
    let totalSum = 0;

    if(startNum > endNum)
    {
        newStartNum = endNum;
        newEndNum = startNum;
    } 
    else
    {
        newStartNum = startNum;
        newEndNum = endNum;
    }

    for(let i = newStartNum; i <= newEndNum; i++)
    {
        totalSum += i;
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
