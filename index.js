let scHome = 0;
let scGuest = 0;

let homeEl = document.getElementById("home-sc")
let guestEl = document.getElementById("guest-sc")

function addhomeone(){
    scHome += 1  
    homeEl.textContent = scHome
}
function addhometwo(){
    scHome += 2  
    homeEl.textContent = scHome
}
function addhomethree(){
    scHome += 3
    homeEl.textContent = scHome
}


function addguestone(){
    scGuest += 1
    guestEl.textContent = scGuest
}
function addguesttwo(){
    scGuest += 2
    guestEl.textContent = scGuest
}
function addguestthree(){
    scGuest += 3
    guestEl.textContent = scGuest
}


