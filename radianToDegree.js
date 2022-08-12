//.....Convert From Radian To Degree......//
function radianToDegree(radians){
    if(typeof(radians) == 'number'){
        return Number((radians * (180/Math.PI)).toFixed(2)) ;
    }
    else{
           return ('Error: Please Provide Number Type of Javascript!');
    }
}
console.log(radianToDegree('0.7854'));