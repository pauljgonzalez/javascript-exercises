const sumAll = function(x,y) {

if(x < 0  || Number.isInteger(x)==false){
    return "ERROR"
}

if (y < 0 || Number.isInteger(y)==false){
    return "ERROR"
}

let sum = 0;
if(x<y){

    for(i = x ; i<=y ; i++){
        sum += i;
    }
    return sum;
}

if(y<x){

    for(i = y ; i<=x ; i++){
        sum += i;
    }
    return sum;
}




};

// Do not edit below this line
module.exports = sumAll;
