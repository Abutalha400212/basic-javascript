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
        return ('Error: please Provide Integer Number!')
    }
    else if (typeof (diesel) == 'number' && typeof (petrol) == 'number' && typeof (octen) == 'number') {
        return (dieselPrice + petrolPrice + octenPrice);
    }
    else {
        return ('Error: Please Provide Number Type of Javascript!');
    }
}
console.log(oilPrice(3,3, 7));