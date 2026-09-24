
const toggle = document.getElementById("toggle");
const inside = document.getElementById("inside");
const topImage = document.getElementById("topImage");

let checkIfFull = [];

let codeMode = false;

let rainbowMode = false;

toggle.addEventListener("click", () => {

    if(!codeMode){
        goToCodeMode();
    } else {
        goToBackground();
    }

});

function goToBackground(){

    inside.style.left = "25%";
    toggle.style.backgroundColor = "#f1e1e1";
    inside.style.backgroundColor = "#02C202";
    toggle.style.borderColor = "#02c202";
    topImage.style.opacity = "1";
    codeMode = false;
    quickErase();

}

function goToCodeMode(){

    
    topImage.style.opacity = "0";
    inside.style.left = "75%";
    toggle.style.backgroundColor = "#f1e1e1";
    inside.style.backgroundColor = "red";
    toggle.style.borderColor = "red";
    codeMode = true;

}

let animateFunction;
let arrayList = [];

const mainText = document.getElementById("mainText");
mainText.style.color = "#02C202";

for(let i = 0; i < 100; i++){
    arrayList.push(" ");
    checkIfFull.push(0);
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


// all rows
function eraseAllRow(){
    for(let i = 0; i < 100; i++){
        let listString = arrayList[i];

        if(Math.random() <= 0.25){
            if(listString.length <= 41){

                const currentRow = document.getElementById("row" + (i + 1));
                
                listString = listString.substring(0, listString.length - 1);

                const distanceMoved = (41 - listString.length) * 0.05;

                currentRow.style.transform = `translateY(${distanceMoved}rem)`;
            
                arrayList[i] = listString;

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

// run one row

function fillRow(n){
    let listString = arrayList[n];

    if(checkIfFull[n] == 0){

        if(Math.random() >= 0.75){
            listString += getRandomJapaneseLetters();

            arrayList[n] = listString;
        }

        if(listString.length == 40){
            checkIfFull[n] = 40;
        }

    }

}

function eraseRow(n){
    let listString = arrayList[n];

    if(checkIfFull[n] == 40){

        if(Math.random() >= 0.75){
            listString = listString.substring(1, listString.length - 1);

            arrayList[n] = listString;


            const currentRow = document.getElementById("row" + (n + 1));

            const distanceMoved = (41 - listString.length) * 0.05;

            currentRow.style.transform = `translateY(${distanceMoved}rem)`;

        }

        if(listString.length == 0){
            checkIfFull[n] = 0;
            returnP(n);
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

function returnP(n){

    const currentRow = document.getElementById("row" + (n + 1));

    currentRow.style.transform = "translateY(0rem)";


}

function updateScreen(){
    
    for(let i = 0; i < 100; i++){

        let currentRow = document.getElementById("row" + (i + 1));

        currentRow.innerHTML = arrayList[i];

    }

}

function returnPToOrginalPlace(){

    for(let i = 0; i < 100; i++){

        const currentRow = document.getElementById("row" + (i + 1));

        currentRow.style.transform = "translateY(0rem)";

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

    if(count % 2 == 0){
        if(codeMode){

            for(let i = 0; i < 100; i++){
                fillRow(i);
                eraseRow(i);
            }
            
            updateScreen();
        } 
    }

    if(count == 200){
        count = 0;
        if(rainbowMode){
            mainText.style.color = randomColor();
        }
    }

    count++;






    animateFunction = requestAnimationFrame(animate);

}


animateFunction = requestAnimationFrame(animate);