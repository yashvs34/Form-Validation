const first = document.getElementById("firstName");
const last = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("button_container");

const firstEmpty = document.createElement("div");
const firstError = document.createElement("div");
const lastEmpty = document.createElement("div");
const lastError = document.createElement("div");
const emailEmpty = document.createElement("div");
const passwordEmpty = document.createElement("div");
const passwordError = document.createElement("div");


function checkName(name){
    for(let i=0 ; i<name.length ; i++){
        if( (name.charCodeAt(i) < 65) || (name.charCodeAt(i) > 90 && name.charCodeAt(i) < 97) || (name.charCodeAt(i)>122)){return false;}
    }
    return true;
}

function checkPassword(password){
    // Length of string
    if(password.length < 8){return false;}

    // If capital letter is present or not
    let flag = false;
    for(let i=0 ; i<password.length ; i++){
        if((password.charCodeAt(i) >= 65) && (password.charCodeAt(i) <= 90)){flag = true;break;}
    }
    if(!flag){return false;}

    // If small letter is present or not
    flag = false;
    for(let i=0 ; i<password.length ; i++){
        if((password.charCodeAt(i) >= 97) && (password.charCodeAt(i) <= 122)){flag = true;break;}
    }
    if(!flag){return false;}

    // If special character is present or not
    flag = false;
    for(let i=0 ; i<password.length ; i++){
        if(((password.charCodeAt(i) >= 33) && (password.charCodeAt(i) <= 47)) || (password.charCodeAt(i) >= 58) && (password.charCodeAt(i) <= 64)){flag = true;break;}
    }
    if(!flag){return false;}

    // If number is present or not
    flag = false;
    for(let i=0 ; i<password.length ; i++){
        if((password.charCodeAt(i) >= 48) && (password.charCodeAt(i) <= 57)){flag = true;break;}
    }
    if(!flag){return false;}

    // Else return true
    return true;
}   

let list = [];

let firstCountEmpty = false;
let firstCountError = false;
let lastCountEmpty = false;
let lastCountError = false;
let emailCountEmpty = false;
let passwordCountEmpty = false;
let passwordCountError = false;

let firstFlag = false;
let lastFlag = false;
let emailFlag = false;
let passwordFlag = false;

button.addEventListener("click", () => {
    let obj = {
        [firstName] : "",
        [lastName] : "",
        [email] : "",
        [password] : "",
    }

    {if(first.value.length===0){
        if(firstCountError){firstError.remove();firstCountError = false;}
        if(firstCountEmpty){firstEmpty.remove();firstCountEmpty = false;}
        firstEmpty.classList.add("error");
        firstEmpty.innerHTML = `*This field cannot be empty`;
        document.getElementById("firstName_container").appendChild(firstEmpty);
        firstCountEmpty = true;
    }
    else if(checkName(first.value)){
        if(firstCountError){firstError.remove();firstCountError = false;}
        if(firstCountEmpty){firstEmpty.remove();firstCountEmpty = false;}
        obj.firstName = first.value;
        firstFlag = true;
    }
    else{
        if(firstCountError){firstError.remove();firstCountError = false;}
        if(firstCountEmpty){firstEmpty.remove();firstCountEmpty = false;}
        firstError.innerHTML = `Name can only contain alphabets`;
        firstError.classList.add("error");
        document.getElementById("firstName_container").appendChild(firstError);
        firstCountError = true;
    }}

    {if(last.value.length===0){
        if(lastCountError){lastError.remove();lastCountError = false;}
        if(lastCountEmpty){lastEmpty.remove();lastCountEmpty = false;}
        lastEmpty.classList.add("error");
        lastEmpty.innerHTML = `*This field cannot be empty`;
        document.getElementById("lastName_container").appendChild(lastEmpty);
        lastCountEmpty = true;;
    }
    else if(checkName(last.value)){
        if(lastCountError){lastError.remove();lastCountError = false;}
        if(lastCountEmpty){lastEmpty.remove();lastCountEmpty = false;}
        obj.lastName = last.value;
        lastFlag = true;
    }
    else{
        if(lastCountError){lastError.remove();lastCountError = false;}
        if(lastCountEmpty){lastEmpty.remove();lastCountEmpty = false;}
        lastError.innerHTML = `Name can only contain alphabets`;
        lastError.classList.add("error");
        document.getElementById("lastName_container").appendChild(lastError);
        lastCountError = true;
    }}

    {if(email.value.length===0){
        if(emailCountEmpty){emailEmpty.remove();emailCountEmpty = false;}
        emailEmpty.classList.add("error");
        emailEmpty.innerHTML = `*This field cannot be empty`;
        document.getElementById("email_container").appendChild(emailEmpty);
        emailCountEmpty = true;
    }
    else{
        if(emailCountEmpty){emailEmpty.remove();emailCountEmpty = false;}
        obj.email = email.value;
        emailFlag = true;
    }}

    {if(password.value.length===0){
        if(passwordCountError){passwordError.remove();passwordCountError = false;}
        if(passwordCountEmpty){passwordEmpty.remove();passwordCountEmpty = false;}
        passwordEmpty.classList.add("error");
        passwordEmpty.innerHTML = `*This field cannot be empty`;
        document.getElementById("password_container").appendChild(passwordEmpty);
        passwordCountEmpty = true;
    }
    else if(checkPassword(password.value)){
        if(passwordCountError){passwordError.remove();passwordCountError = false;}
        if(passwordCountEmpty){passwordEmpty.remove();passwordCountEmpty = false;}
        obj.password = password.value;
        passwordFlag = true;
    }
    else{
        if(passwordCountError){passwordError.remove();passwordCountError = false;}
        if(passwordCountEmpty){passwordEmpty.remove();passwordCountEmpty = false;}
        passwordError.innerHTML = `<ul>
                                        <li class="error">Password must contain at least 8 characters</li>
                                        <li class="error">Password must contain a capital letter</li>
                                        <li class="error">Password must contain a small letter</li>
                                        <li class="error">Password must contain a special character</li>
                                        <li class="error">Password must contain a number</li>
                                   </ul>`;
        document.getElementById("password_container").appendChild(passwordError);
        passwordCountError = true;
    }}

    if(firstFlag && lastFlag && emailFlag && passwordFlag){
        document.location.href = "index1.html";
    }
})