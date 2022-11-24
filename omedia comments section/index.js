
function showModal() {
    var element = document.getElementById("popUp");

    element.classList.remove("invisible");
}
function hideModal() {
    var element = document.getElementById("popUp");
    element.classList.add("invisible");
}


function toggleReply() {
    var element = document.getElementById("reply");
    element.classList.toggle("invisible");
}



let scores = [12, 5, 4, 2];
console.log(scores);

function firstScorePlus() {
    scores[0] += 1;
    var firstScore = document.getElementById("firstScore");
    firstScore.textContent = scores[0];
}
function firstScoreMinus() {
    if (scores[0] >= 1) {
        scores[0] -= 1;
        var firstScore = document.getElementById("firstScore");
        firstScore.textContent = scores[0];
    }

}
function secondScorePlus() {
    scores[1] += 1;
    var firstScore = document.getElementById("secondScore");
    firstScore.textContent = scores[1];
}
function secondScoreMinus() {
    if (scores[1] >= 1) {
        scores[1] -= 1;
        var firstScore = document.getElementById("secondScore");
        firstScore.textContent = scores[1];
    }

}

function thirdScorePlus() {
    scores[2] += 1;
    var firstScore = document.getElementById("thirdScore");
    firstScore.textContent = scores[2];
}
function thirdScoreMinus() {
    if (scores[2] >= 1) {
        scores[2] -= 1;
        var firstScore = document.getElementById("thirdScore");
        firstScore.textContent = scores[2];
    }
}
function fourthScorePlus() {
    scores[3] += 1;
    var firstScore = document.getElementById("fourthScore");
    firstScore.textContent = scores[3];
}
function fourthScoreMinus() {
    if (scores[3] >= 1) {
        scores[3] -= 1;
        var firstScore = document.getElementById("fourthScore");
        firstScore.textContent = scores[3];
    }
}

var firstScore = document.getElementById("firstScore");
firstScore.textContent = scores[0];

var secondScore = document.getElementById("secondScore");
secondScore.textContent = scores[1];

var thirdScore = document.getElementById("thirdScore");
thirdScore.textContent = scores[2];

var fourthScore = document.getElementById("fourthScore");
fourthScore.textContent = scores[3];





