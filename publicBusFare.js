const eachTicketPriceInPublicBus = 250;
function publicBusFare(passenger){
    // Each Bus For 50 Passenger //
   eachBusFor50Passenger = passenger % 50;
   //Each Micro Bus For 11 Passenger //
   eachMicrobus11Passenger = eachBusFor50Passenger % 11; 
   if(passenger <0){
    return ('Error: please Provide Integer Number!')
   }
   else if(typeof(passenger) == 'number'){
     return (eachMicrobus11Passenger * eachTicketPriceInPublicBus);
   }
  else{
    return ('Error: Please Provide Number Type of Javascript!');
  }
}
console.log(publicBusFare(114));