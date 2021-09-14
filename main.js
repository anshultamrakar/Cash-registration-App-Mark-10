const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const buttonCheck = document.querySelector("#btn-check");
const message = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".no-Of-Notes");


const availableNotes = [2000,500,100,20,5,1];

buttonCheck.addEventListener("click", function validateBillAmount (){
    hideMessage();
  
   if(billAmount.value > 0 ){
if (cashGiven.value >= billAmount.value){
   const amountToBeReturned = cashGiven.value - billAmount.value ;

   calculateChange(amountToBeReturned);
}else{
    showMessage("Do you want to wash the Plates") ;
}
   }else {
    showMessage("Invalid bill Amount");
   }
})


function hideMessage(){
    message.style.display ="none" ;
}

function calculateChange(amountToBeReturned){
for (let i = 0; i < availableNotes.length ; i++){
    const numberOfNotes = Math.trunc(amountToBeReturned/ availableNotes[i]);
        amountToBeReturned %= availableNotes[i]
        noOfNotes[i].innerText = numberOfNotes;
}
}

function showMessage(msg){
    message.style.display = "block" ;
    message.innerText= msg;
}



