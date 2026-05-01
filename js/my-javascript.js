
// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

// function getphoto(){
// document.getElementById('fileInput').click();
// }

var fullNameInput = document.getElementById('full-name');
var phoneNumberInput = document.getElementById('PhoneNumber');
var fullEmailAddressInput = document.getElementById('EmailAddress');
var fullAddressInput = document.getElementById('Address');
var fullgroupInput = document.getElementById('group');
var fullNotesInput = document.getElementById('Notes');
var ListOfContacts=[];
function AddContact(){
  var contact = {
    name: fullNameInput.value ,  
    number:phoneNumberInput.value , 
    EmailAddress:fullEmailAddressInput.value ,
    address:fullAddressInput.value ,
    group:fullgroupInput.value ,
    notes:fullNotesInput.value
}
 ListOfContacts.push(contact);
resetAllInputs()
} 


function resetAllInputs(){
   fullNameInput.value="";
 phoneNumberInput.value="";
 fullEmailAddressInput.value="";
 fullAddressInput.value="";
 fullgroupInput.value="";
 fullNotesInput.value="";
}
function displayContacts(){







}