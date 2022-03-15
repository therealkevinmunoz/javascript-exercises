const reverseString = function(string) {

    let reverseArray = new Array(string.length);

    for(let i = 0; i < reverseArray.length; i ++)
    {
        reverseArray[i] = string.charAt(i);
    }

   reverseArray.reverse();

   let reverseFinalString = reverseArray.join("");

   return reverseFinalString;
};

// Do not edit below this line
module.exports = reverseString;
