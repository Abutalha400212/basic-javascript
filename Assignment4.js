// ..................Assalamu Alaikum........................//


// ................No. 1 : problem-Solved..................//
//.....Convert From Radian To Degree......//
//.....................Start 1st Problem...........//
function radianToDegree(radians) {
    if (typeof (radians) == 'number') {
        return Number((radians * (180 / Math.PI)).toFixed(2));
    }
    else {
        //Don't Provide invalid Number  if you do , you can not Access and Dont get output.........//
        return ('Error: Please Provide Number Type of Javascript!');
    }
}
//.....................End 1st Problem...........//



// ................No. 2 : problem-Solved..................//
// ................Js file Checker.............. //
//.....................Start 2nd Problem...........//
function isJavaScriptFile(fileName) {
    if (typeof (fileName) == 'string') {
        return fileName.includes('js');
    }
    else {
        //Don't Provide invalid Number  if you do , you can not Access and Dont get output.........//
        return ('Error: Please Provide String Type of Javascript!')
    }
}
//.....................End 2nd Problem...........//



// ................No. 3 : problem-Solved..................//
//....................Calculate Of Oil Price..................// 
//.....................Start 3rd Problem...........//
const eachLitreDieselPrice = 114;
const eachLitrePetrolPrice = 130;
const eachLitreOctenPrice = 135;
function oilPrice(diesel, petrol, octen) {
    // .....calculate Of Diesel..... //
    dieselPrice = diesel * eachLitreDieselPrice;
    // ....Calculate Of Petrol..... //
    petrolPrice = petrol * eachLitrePetrolPrice;
    //......Calculate Of Octen..... //
    octenPrice = octen * eachLitreOctenPrice;
    //Total Price Of Oil//
    if (diesel < 0 || petrol < 0 || octen < 0) {
        //Don't Provide Negative Number  if you do , you can not Access.........//
        return ('Error: please Provide Integer Number!')
    }
    else if (typeof (diesel) == 'number' && typeof (petrol) == 'number' && typeof (octen) == 'number') {
        return (dieselPrice + petrolPrice + octenPrice);
    }
    else {
        //Don't Provide invalid Number  if you do , you can not Access and Dont get output.........//
        return ('Error: Please Provide Number Type of Javascript!');
    }
}
//.....................End 3rd Problem...........//




// ................No. 4 : problem-Solved..................//
//.............. Calculate Public Bus fare..........//
//.....................Start 4th Problem...........//
const eachTicketPriceInPublicBus = 250
function publicBusFare(passenger) {
    // Each Bus For 50 Passenger //
    eachBusFor50Passenger = passenger % 50;
    //Each Micro Bus For 11 Passenger //
    eachMicrobus11Passenger = eachBusFor50Passenger % 11;
    if (passenger < 0) {
        //Don't Provide Negative Number  if you do , you can not Access.........//
        return ('Error: please Provide Integer Number!')
    }
    else if (typeof (passenger) == 'number') {
        return (eachMicrobus11Passenger * eachTicketPriceInPublicBus);
    }
    else {
        //Don't Provide invalid Number  if you do , you can not Access and Dont get output.........//
        return ('Error: Please Provide Number Type of Javascript!');
    }
}
// .................End 4th problem................//



// ................No. 5 : problem-Solved..................//
// .............check Best Friend Between Two Object Values.........//
// ........Please Provide valid Two Object Input 'friend1' & 'friend2'........//
//..........................Strat 5th Problem......................//
function isBestFriend(friend1, friend2) {
    const a = Object.values(friend1);
    const b = Object.values(friend2);
    if (typeof (a[0]) !== 'string' || typeof (a[1]) !== 'string' || typeof (b[0]) !== 'string' || typeof (b[1]) !== 'string') {
        // if you type Wrong Keyword , You Can't Access And Don't get Output.//
        return ('Eror: Please provide a String Type Javascript!')
    }
    //....If Your Keyword type is Valid & condition is True , You must got Output: true ...//
    else if (a[0] == b[1] && b[0] == a[1]) {
        return true;
    }
    //....If Your Keyword type is Valid & condition is false , You must got Output: false ...//
    else {
        return false;
    }
}
//....................................End 5th problem..................................//
// ..................Thanks For Provide Good Work......................//