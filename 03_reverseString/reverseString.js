const reverseString = function(string) {

    let word = "";
    let stringCount = string.length;
    for( i=stringCount-1 ; i>=0 ; i--){
        word += string[i];
    }    
    return word;

};

// Do not edit below this line
module.exports = reverseString;
