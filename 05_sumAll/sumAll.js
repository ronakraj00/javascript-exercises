const sumAll = function(i,j) {
    let sum=0;
    if(typeof(i)==="string"||typeof(j)==="string"){
        return "ERROR";
    }
    if((i>=0)&&(j>=0)&&(i<=j)){
        for(i;i<=j;i++){
            sum+=i;
        }
        return sum;
    }
    else if((i>j)){
        for(j;j<=i;j++){
            sum+=j;
        }
        return sum;
    }
    else{
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = sumAll;
