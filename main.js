const buttonAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const buttonCheck = document.querySelector("#btn-check");
const message = document.querySelector("#error-msg")


buttonCheck.addEventListener("click", function validBillAmount(){
    // message.style.display = none ;
   if( buttonAmount.value > 0 ){
if(cashGiven.value >= buttonAmount.value ){
const cashToBeReturned = cashGiven.value - buttonAmount.value ;
calculateChange(cashToBeReturned );
}
else { 
    showMessage("The cash provided should atleast be equal to bill amount  ")
}
}else{
   showMessage("Do you wish to wash the plates");
   }
})

// function calculateChange(){

// }


function showMessage(msg){
    // msg.style.display = block ;
    msg.innerText= msg
}

