
const reverseString = function(string) {
    let arr=string.split("");
    let newArr=arr.reverse();
    newArr=newArr.join("");
    return newArr;
   

};

// Do not edit below this line
module.exports = reverseString;
