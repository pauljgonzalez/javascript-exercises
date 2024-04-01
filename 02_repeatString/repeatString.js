const repeatString = function(message, num) {

    if(num <0){
        return "ERROR";
    }

    for ( i=0; i<=num; i++){
          return message.repeat(num); 
    }

};

// Do not edit below this line
module.exports = repeatString;
