const removeFromArray = function(arrayInput) {

    for(i = 1; i < arguments.length; i++)
    {
        for(j = 0; j < arrayInput.length; j++)
        {
            if(arguments[i] === arrayInput[j])
            {
                arrayInput.splice(j, 1);
            }
        }
    }

    return arrayInput;
};

// Do not edit below this line
module.exports = removeFromArray;
