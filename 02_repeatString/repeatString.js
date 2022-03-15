const repeatString = function(string, repeats) {

    if(repeats < 0)
    {
        return "ERROR";
    }
    else
    {
        let stringArray = new Array(repeats);

        for(let i = 0; i < stringArray.length; i++)
        {
            stringArray[i] = string;
        }
    
        let finalString = stringArray.join("");
    
        return finalString;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
