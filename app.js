var rangeSlider = document.getElementById("rangeSlider");
var range = document.getElementById("range");
var trialSlider = document.getElementById("trialSlider");
var trial = document.getElementById("trial");
var expectedResult = document.getElementById("eresult");
var runTrials = document.getElementById("runTrials");
var randomNumber = document.getElementById("randomNumber");
var result = document.getElementById("prash");
var counter = document.getElementById("counter");
var tots = document.getElementById("total");
var accResult = document.getElementById("accResult");
var refresh = document.getElementById("refresh");
let total = 0;
let c = 0;
let number;

range.innerHTML = rangeSlider.value; // Display the default slider value
rangeSlider.oninput = function(){
    range.innerHTML = this.value;
    expectedResult.innerHTML = this.value/2;
}

trial.innerHTML = trialSlider.value;
trialSlider.oninput = function(){
    trial.innerHTML = this.value;
}

refresh.onclick = function(){
    window.location.reload();
}

runTrials.onclick = function(){
    result.style.display = "block";
    randomNumber.style.display = "block";
    runAllTrials();
    trialSlider.style.display = "none";
    rangeSlider.style.display = "none";
}

function runAllTrials(){
    setInterval(() => {
        if (trialSlider.value == c){
            return;
        }
        runRandom();
        total += number;
        counter.innerHTML = (c+1).toString();
        accResult.innerHTML = total/c;
        c++;
    }, 0.0000000000000001);
}

function runRandom(){
    number = Math.floor(Math.random()*(rangeSlider.value));
    randomNumber.innerHTML = "";
    randomNumber.innerHTML = number;
}