
const toggle = document.getElementById("toggle");
const inside = document.getElementById("inside");
const topImage = document.getElementById("topImage");

// arrays;
let checkIfRunning = [];
let checkIfFull = [];
let rowLength = [];
let delay = [];
let spanArray = []

let codeMode = false;

let rainbowMode = false;

let num = 0;

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
mainText.style.color = " #00979d";


// setup
for(let i = 0; i < 100; i++){
    arrayList.push(" ");
    checkIfFull.push(false);
    rowLength.push(0);
    checkIfRunning.push(randomizeRunning());
    delay.push(0);

    const currentRow = document.getElementById("row" + (i + 1));
    const rowArray = [];

    for(let k = 0; k < 40; k++){
            num++;
            const span = document.createElement("span");
            span.textContent = " ";
            currentRow.append(span);
            rowArray.push(span);

    }

    spanArray.push(rowArray);

}


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

// random color 
function randomColor(){

    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    return randomColor;
}

// randomize the running

function randomizeRunning(){

    if(Math.random() >= 0.995){
        return true;
    } else {
        return false;
    }

}



// run one row

function fillRow(n, f){

        // initialize variables
        let listString = arrayList[n];
        let listStringLength = listString.length;

    if(f && listStringLength <= 40){
        let char = getRandomJapaneseLetters();

        const currentSpan = spanArray[n][listStringLength - 1];

        arrayList[n] = listString + char;

        currentSpan.textContent = char;

        currentSpan.classList.add("fadeInClass");
        
        rowLength[n] += 1;

    }

}

function eraseRow(n, a, b){

    let listString = arrayList[n];
    let listStringLength = listString.length;
    
    if(listStringLength > 15){

        delay[n] += 1;

    }

    if(delay[n] <= 40){
        if(listStringLength > 15){
            const pastSpan = spanArray[n][delay[n] - 1];
            pastSpan.classList.remove("fadeInClass");
            pastSpan.classList.add("fadeAwayClass");
        }
    }
    
    if(delay[n] == 55){
        
        checkIfRunning[n] = false;
        checkIfFull[n] = true;
        reset(n);

    }

}

function reset(n){

        for(let i = 0; i < 40; i++){
            const currentSpan = spanArray[n][i];
            if(currentSpan){
                currentSpan.textContent = "";
                currentSpan.classList.remove("fadeAwayClass");
            }
        }
        arrayList[n] = " ";
        rowLength[n] = 0;
        delay[n] = 0;
}


let count = 0;


function animate(time){

    // main thread or smth
    if(count % 3 == 0){
        if(codeMode){
            
            for(let i = 0; i < 100; i++){


                fillRow(i, checkIfRunning[i]);

                eraseRow(i);

                if(!checkIfRunning[i]){
                    if(Math.random() > 0.9975){
                        checkIfRunning[i] = true;
                    }
                }

            }
        }
    }

    // rainbow mode
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