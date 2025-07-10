const repeatString = function(str,noOfTimes) {
    if (noOfTimes<0) return "ERROR"
    let returnStr = '';
    for (let i=0; i<noOfTimes; i++) {
        returnStr+= str;
    }
    return returnStr
};

// Do not edit below this line
module.exports = repeatString;
