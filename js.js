const myArray = ["saiful bin atoar", "selim reza", "sabbir hossain", "abdullah bin saif", "abdullah bin mamun", "afsar ali", "akib", "abrar sahriyar", "abdullah talha","alamgir hasan", "anisur rahman gazi", "alamin ahammed", "arifur rahman", "anjim islam", "ashraful islam", "f a niloy", "hasan", "ibrahim", "jahir", "jalal ahmed", "jannatun naeem soikot", "djaye", "mahfuj", "mainul islam murad", "tanvir", "tarek anowar", "sobuj", "salam", "mostarika pagli"];

const search = document.querySelector(".search");
const submit = document.querySelector(".submit");
const resultElement = document.querySelector("#result");

function checkName(name) {
    return name.toLowerCase() === search.value.toLowerCase();
};

function myFunc() {
    const foundIndex = myArray.findIndex(checkName);
    
    if (foundIndex !== -1) {
        const foundName = myArray[foundIndex];
        return `Welcome <span>${foundName}</span> ! You are selected.`;
    } else {
        return ` Sorry, <span class = "ppp">${search.value}</span> is not in the list. Please try again. `;
    }
};

submit.onclick = function() {
    const el = myFunc();
    resultElement.innerHTML = el;
};

 myArray[29]= "mostarika";
 myArray.push( "hasina mami", "athik hasan", "mostak");
 myArray.pop();
 myArray.splice(29, 2, );
