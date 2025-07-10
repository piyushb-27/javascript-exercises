const removeFromArray = function(arr, ...toBeRemoved) {
    return arr.filter((item)=> !toBeRemoved.includes(item))
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
