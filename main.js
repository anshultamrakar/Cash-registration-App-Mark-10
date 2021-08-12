const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const buttonCheck = document.querySelector("#btn-check");
const message = document.querySelector("#error-msg");


buttonCheck.addEventListener("click", function validateBillAmount (){
   if(billAmount.value > 0 ){
if (cashGiven.value >= billAmount.value){
   const amountToBeReturned = cashGiven.value - billAmount.value ;
   calculateChange(amountToBeReturned);
}else{
    showMessage("Do you want to wash the Plates");
}
   }else {
    showMessage ("Invalid bill Amount");
   }
})


function showMessage(msg){
    msg.innerText= msg;
}



