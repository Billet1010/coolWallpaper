
const toggle = document.getElementById("toggle");
const inside = document.getElementById("inside");
const topImage = document.getElementById("topImage");


let codeMode = false;

toggle.addEventListener("click", () => {

    if(!codeMode){
        goToCodeMode();
    } else {
        goToBackground();
    }

});

function goToBackground(){

    inside.style.left = "25%";
    toggle.style.backgroundColor = "green";
    topImage.style.opacity = "1";
    codeMode = false;
    quickErase();

}

function goToCodeMode(){

    
    topImage.style.opacity = "0";
    inside.style.left = "75%";
    toggle.style.backgroundColor = "red";
    codeMode = true;

}

let animateFunction;
let arrayList = [];

const mainText = document.getElementById("mainText");

for(let i = 0; i < 100; i++){
    arrayList.push(" ");
}

function fillStart(){

    let listOfLetters = " ";

    for(let i = 0; i < 100; i++){ 

        let listOfLetters = " ";

        for(let k = 0; k < 100; k++){

            listOfLetters += getRandomJapaneseLetters();

        }

        arrayList.push(listOfLetters);

    }
    
    animateFunction = requestAnimationFrame(animate);

}

//fillStart();


// gret random japanese letters and numbers
function getRandomJapaneseLetters(){
    // Total characters: 10 numbers + 90 Katakana = 100 choices
    const totalChoices = 10 + (0x30FA - 0x30A1 + 1);
    const randomIndex = Math.floor(Math.random() * totalChoices);

    let charCode;
    if (randomIndex < 10) {
        // Pick a number from the 0x0030 - 0x0039 range
        charCode = 0x0030 + randomIndex;
    } else {
        // Pick a Katakana from the 0x30A1 - 0x30FA range
        charCode = 0x30A1 + (randomIndex - 10);
    }

    return String.fromCharCode(charCode);
}

function quickErase(){

    let listString = "";

    for(let i = 0; i < 100; i++){

        listString = arrayList[i];

        listString = "";

        arrayList[i] = listString;

    }

}

function eraseAllRow(){
    for(let i = 0; i < 100; i++){
        let listString = arrayList[i];

        if(Math.random() <= 0.25){
            if(listString.length <= 41){
                
                const newString = listString.substring(0, listString.length - 1);

                arrayList[i] = newString;

            }
        }
    }
}

function fillAllRow(){

    for(let i = 0; i < 100; i++){

        let listString = arrayList[i];

        if(listString.length < 41){
            if (Math.random() <= 0.25){
                listString += getRandomJapaneseLetters();

                arrayList[i] = listString;
            }
        }
    }

}

function checkIfAllRowsAreFilled(){

    for(let i = 0; i < 100; i++){

        let listString = arrayList[i];

        if(listString.length != 41){
            return false;
        }

    }

    return true;

}

function checkIfAllRowsAreEmpty(){

    for(let i = 0; i < 100; i++){

        let listString = arrayList[i];

        if(listString.length != 0){
            return false;
        }

    }

    return true;

}

function updateScreen(){
    
    for(let i = 0; i < 100; i++){

        let currentRow = document.getElementById("row" + (i + 1));

        currentRow.innerHTML = arrayList[i];

    }

}

function randomColor(){

    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    return randomColor;
}

let count = 0;


let isFull = false;
let isEmpty = true;

function animate(time){

    if(codeMode){
        if(checkIfAllRowsAreFilled()){
            isFull = true;
            isEmpty = false;
        }

        if(checkIfAllRowsAreEmpty()){
            isEmpty = true;
            isFull = false;
        }

        if(!isFull && isEmpty){
            fillAllRow();
        }

        if(isFull && !isEmpty){
            eraseAllRow();
        }
        

        updateScreen();
    } 

    count++;

    animateFunction = requestAnimationFrame(animate);

}


animateFunction = requestAnimationFrame(animate);