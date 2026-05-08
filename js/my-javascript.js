// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

// function getphoto(){
// document.getElementById('fileInput').click();
// }

var fullNameInput = document.getElementById("full-name");
var phoneNumberInput = document.getElementById("PhoneNumber");
var fullEmailAddressInput = document.getElementById("EmailAddress");
var fullAddressInput = document.getElementById("Address");
var fullgroupInput = document.getElementById("group");
var fullNotesInput = document.getElementById("Notes");
var searchContactInput = document.getElementById("search");

var ListOfContacts = [];

if (localStorage.getItem("ListOfContacts") !== null) {
  ListOfContacts = JSON.parse(localStorage.getItem("ListOfContacts"));
}

displayContacts(ListOfContacts);

function count() {
  if (ListOfContacts == 0) {
    document.getElementById("count").innerHTML = `<span id="count">0</span>`;
  } else {
    document.getElementById("count").innerHTML =
      `<span id="count">${ListOfContacts.length}</span>`;
  }
}
function AddContact() {
  var contact = {
    name: fullNameInput.value,
    number: phoneNumberInput.value,
    EmailAddress: fullEmailAddressInput.value,
    address: fullAddressInput.value,
    group: fullgroupInput.value,
    notes: fullNotesInput.value,
  };
  ListOfContacts.push(contact);
  count();
  localStorage.setItem("ListOfContacts", JSON.stringify(ListOfContacts));
  displayContacts(ListOfContacts);
  changCount();
  resetAllInputs();
}
function changCount() {
  if (ListOfContacts.length === 0) {
    document.getElementById("logoOne").innerHTML = `

   <h6 class="text-secondary m-0">Total</h6> 
                        <h2 class="fw-bold h4 m-0">0</h2> 
    
    `;
  } else {
    document.getElementById("logoOne").innerHTML = `
       <h6 class="text-secondary m-0">Total</h6> 
                        <h2 class="fw-bold h4 m-0">${ListOfContacts.length}</h2> 
 
 `;
  }

  ListOfContacts = JSON.parse(localStorage.getItem("ListOfContacts"));
}

function resetAllInputs() {
  fullNameInput.value = "";
  phoneNumberInput.value = "";
  fullEmailAddressInput.value = "";
  fullAddressInput.value = "";
  fullgroupInput.value = "";
  fullNotesInput.value = "";
  searchContactInput.value = "";
}

function displayContacts(displayList) {
  if (displayList.length === 0) {
    document.getElementById("demoo").innerHTML = `
    <div class="mx-auto">
                            <div class="box-of-empty-contact d-flex flex-wrap align-content-center justify-content-center mt-5 mx-auto">
                            <i class="fa-solid fa-address-book fa-2xl" style="color: rgb(116, 113, 113);"></i>
                        </div>
                        <p class="text-center text-gray mt-3">No contacts found</p>
                        <p class="text-center text-secondary">Click "Add Contact" to get started</p>
                    </div> 
                    </div>
                     `;
    return;
  }
  var cartona = "";
  for (var i = 0; i < displayList.length; i++) {
    cartona += `
      <div class="border-display  m-1">
                        <div class="d-flex flex-wrap  p-3">
                            <div
                                class="logo-contact d-flex flex-wrap justify-content-center align-content-center fw-bold text-white h5 position-relative">
                                <div id="moveLogo" class="logo-f-star d-flex flex-wrap justify-content-center align-content-center">
                                    <i class="fa-solid fa-star fa-2xs" style="color: rgb(246, 245, 241);"></i>
                                </div>
                                <div class="logo-f-heart  d-flex flex-wrap justify-content-center align-content-center">
                                    <i class="fa-solid fa-heart-pulse fa-2xs" style="color: rgb(246, 245, 241);"></i>
                                </div>
                                ${displayList[i].name.toUpperCase().split("", 2)}
                            </div>
                            <div class="details mx-3 mt-1">
                                <h5 class="fw-semibold">${displayList[i].name}</h5>
                                <div class="d-flex">
                                    <div class="iconTel d-flex flex-wrap justify-content-center align-content-center">
                                        <i class="fa-solid fa-phone fa-2xs" style="color: rgb(116, 192, 252);"></i>
                                    </div>
                                    <div><span class="ms-2 mb-1">${displayList[i].number}</span></div>
                                </div>
                            </div>
                        </div>


                        <div class="card-contact d-flex ms-3">
                            <div class="logo-massage d-flex flex-wrap justify-content-center align-content-center ">
                                <i class="fa-solid fa-envelope" style="color: rgb(177, 151, 252);"></i>
                            </div>
                            <span class="text-secondary ms-3">${displayList[i].EmailAddress}</span>
                        </div>
                        <div class="card-contact d-flex ms-3 py-2">
                            <div
                                class="logo-massage location d-flex flex-wrap justify-content-center align-content-center ">
                                <i class="fa-solid fa-location-dot" style="color: rgb(2, 129, 91);"></i>
                            </div>
                            <span class="text-secondary ms-3">${displayList[i].address}</span>
                        </div>
                        <span class="logo-patch ms-3 fw-semibold">${displayList[i].group}</span>
                        <span class="logo-patch ms-3 fw-semibold patch-2">
                            <i class="fa-solid fa-heart-pulse fa-2xs" style="color: rgb(255, 32, 86);"></i>
                            Emergency</span>
                        <div class=" border-top my-3 last-part-card  d-flex flex-wrap justify-content-between">

                            <div class="d-flex py-2 ms-2">
                                <div class="iconTel-card d-flex flex-wrap justify-content-center align-content-center ">
                                    <i class="fa-solid fa-phone fa-sm" style="color: rgb(0, 153, 102);"></i>
                                </div>
                                <div
                                    class="logo-massage-card d-flex flex-wrap justify-content-center align-content-center ms-2">
                                    <i class="fa-solid fa-envelope fa-sm" style="color: rgb(127, 34, 254);"></i>
                                </div>
                            </div>
                            <div class="d-flex me-3 py-2">
                                <div onclick="changeColorGold(${i} , '${displayList[i].EmailAddress}')"
                                    class="same-border d-flex flex-wrap justify-content-center align-content-center  me-1">
                                    <i class="fa-solid fa-star fa-sm" style="color: rgb(104, 103, 102);"></i>
                                </div>
                                <div onclick="changColorRed(${i}, '${displayList[i].EmailAddress}')"
                                    class="same-border d-flex flex-wrap justify-content-center align-content-center heart-puls me-1">
                                    <i class="fa-solid fa-heart-pulse fa-sm" style="color: rgb(104, 103, 102);"></i>
                                </div>
                                <div
                                    class="same-border d-flex flex-wrap justify-content-center align-content-center pen me-1">
                                    <i class="fa-solid fa-pen fa-sm" style="color: rgb(104, 103, 102);"></i>
                                </div>
                                <div onclick="deleteContact(${i})"
                                    class="same-border d-flex flex-wrap justify-content-center align-content-center trash me-1">
                                    <i class="fa-solid fa-trash fa-sm" style="color: rgb(104, 103, 102);"></i>
                                </div>
                            </div>
                        </div>
                    </div>  

`;
  }
  document.getElementById("demoo").innerHTML = cartona;
}

function deleteContact(index) {
  Swal.fire({
    title: "Delete Contact?",
    text: `Are you sure you want to delete ${fullNameInput.value}? This action cannot be undone.`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#606773",
    cancelButtonColor: "#C62222",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) ListOfContacts.splice(index, 1);
    localStorage.setItem("ListOfContacts", JSON.stringify(ListOfContacts));
    displayContacts(ListOfContacts);

    Swal.fire({
      title: "Deleted!",
      text: "Your Contact has been deleted.",
      icon: "success",
    });
  });
}

function searchContact() {
  var searchTerm = searchContactInput.value;
  var searchList = [];

  for (var i = 0; i < ListOfContacts.length; i++) {
    if (
      ListOfContacts[i].name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ListOfContacts[i].number
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      ListOfContacts[i].EmailAddress.toLowerCase().includes(
        searchTerm.toLowerCase(),
      )
    ) {
      searchList.push(ListOfContacts[i]);
    }
  }
  displayContacts(searchList);
}
// searchContact();

var emergencylist = [];

if (emergencylist.length === 0) {
  document.getElementById("callemergency").innerHTML =
    ' <p class="text-secondary d-flex justify-content-center align-items-center mt-5">No emergency contacts</p>';
}

function changColorRed(cardIndx, contactEmail) {
  var foundIndex = -1;
  for (var i = 0; i < emergencylist.length; i++) {
    if (emergencylist[i].EmailAddress === contactEmail) {
      foundIndex = i;
      break;
    }
  }
  if (foundIndex > -1) {
    emergencylist.splice(foundIndex, 1);
  } else {
    emergencylist.push(ListOfContacts[cardIndx]);
  }
  localStorage.setItem(emergencylist, JSON.stringify(emergencylist));
  document.getElementById("logoThree").innerHTML = emergencylist.length;
  if (emergencylist.length > 0) {
    var cartona = "";
    for (var i = 0; i < emergencylist.length; i++) {
      cartona += `
    
    <div
                            class="border my-1 border-d-favourite border-1 position-relative rounded-2 bg-body-secondary mx-auto">
                            <div
                                class="mt-3 icon-contact-favourite d-flex flex-wrap justify-content-center align-items-center fw-bold  rounded-3 bg-warning mt-2 ms-3">
                                SC</div>
                            <div class="m-0 pt-2 ps-3 mt-2 ">
                                <p class="m-0">${ListOfContacts[i].name}</p>
                                <p class="m-0 fs-6 text-secondary">${ListOfContacts[i].number}}</p>
                            </div>
                            <div
                                class="rounded-2 icon-tel2 d-flex flex-wrap justify-content-center align-items-center mt-2">
                                <i class="fa-solid fa-phone fa-xs" style="color: rgb(2, 78, 55);"></i>
                            </div>
                        </div>
    `;

      document.getElementById("callemergency").innerHTML = cartona;
    }
  }
}

var favouriteList = [];

if (favouriteList.length === 0) {
  document.getElementById("favourite").innerHTML =
    ' <p class="text-secondary d-flex justify-content-center align-items-center mt-5">No favorites yet</p>';
}

function changeColorGold(cardFavour, contactEmail) {
  var foundIndeex = -1;

  for (var i = 0; i < favouriteList.length; i++) {
    if (favouriteList[i].EmailAddress === contactEmail) {
      foundIndeex = i;
      break;
    }
  }
  if (foundIndeex > -1) {
    favouriteList.splice(foundIndeex, 1);
  } else {
    favouriteList.push(ListOfContacts[cardFavour]);
  }

  document.getElementById("favourLogo").innerHTML = favouriteList.length;
  if (favouriteList.length > 0) {
    var cartona = "";
    for (var i = 0; i < favouriteList.length; i++) {
      cartona += `
                
                   <div
                            class="border my-1  border-d-favourite border-1 d-flex justify-content-start align-items-start position-relative rounded-2 bg-body-secondary mx-auto">
                            <div
                                class="mt-3 icon-contact-favourite d-flex flex-wrap justify-content-center align-items-center fw-bold  rounded-3 bg-warning mt-2 ms-3">
                                SC</div>
                            <div class="m-0 pt-2 ps-3 mt-2 ">
                                <p class="m-0">${ListOfContacts[cardFavour].name}</p>
                                <p class="m-0 fs-6 text-secondary">${ListOfContacts[cardFavour].number}</p>
                            </div>
                            <div
                                class="rounded-2 icon-tel2 d-flex flex-wrap justify-content-center align-items-center mt-2">
                                <i class="fa-solid fa-phone fa-xs" style="color: rgb(2, 78, 55);"></i>
                            </div>
                        </div> 
            
                `;
      document.getElementById("favourite").innerHTML = cartona;
    }
  }
}

function IsContactNameVaild() {
  var regex = /^[A-Z][a-z]{3,}$/;
  if (regex.test(fullNameInput.value)) {
    fullNameInput.classList.add("is-valid");
    fullNameInput.classList.remove("is-invalid");
  } else {
    fullNameInput.classList.add("is-invalid");
    fullNameInput.classList.remove("is-valid");
  }
}
function IsContactPhoneNumberVaild() {
  var regex = /^(010|012|015|011)[0-9]{8}$/;

  if (regex.test(phoneNumberInput.value)) {
    phoneNumberInput.classList.add("is-valid");
    phoneNumberInput.classList.remove("is-invalid");
  } else {
    phoneNumberInput.classList.add("is-invalid");
    phoneNumberInput.classList.remove("is-valid");
  }
}
function regexEmailAddress() {
  var regex = /^[a-zA-z]{5,}@[a-zA-Z  _]{3,}.com$/;
  if (regex.test(fullEmailAddressInput.value)) {
    fullEmailAddressInput.classList.add("is-valid");
    fullEmailAddressInput.classList.remove("is-invalid");
  } else {
    fullEmailAddressInput.classList.add("is-invalid");
    fullEmailAddressInput.classList.remove("is-valid");
  }
}

function RegexAddress() {
  var regex = /^[a-zA-Z]{20,}$/;
  if (regex.test(fullAddressInput.value)) {
    fullAddressInput.classList.add("is-invalid");
    fullAddressInput.classList.remove("is-valid");
  } else {
    fullAddressInput.classList.add("is-valid");
    fullAddressInput.classList.remove("is-invalid");
  }
}
