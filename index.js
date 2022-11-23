let homePoints = 0;
let guestPoints = 0;
let htp = 0;
let gtp = 0;

let homePointsEl =  document.getElementById("homePoints");
let guestPointsEl =  document.getElementById("guestPoints");
let homeTotalPointsEl = document.getElementById("home-points");
let guestTotalPointsEl = document.getElementById("guest-points");
let winningTeamEL = document.getElementById("winner-button");

function add1Homepoint() {
    homePoints += 1;
    homePointsEl.textContent = homePoints;   
    htp = homeTotalPointsEl.textContent = "Total: " + homePoints; 
}


function add2Homepoints() {
    homePoints += 2;
    homePointsEl.textContent = homePoints;   
    htp = homeTotalPointsEl.textContent = "Total: " + homePoints;     
}


function add3Homepoints() {
    homePoints += 3;
    homePointsEl.textContent = homePoints;   
    htp = homeTotalPointsEl.textContent = "Total: " + homePoints; 
}



function add1Guestpoint() {
    guestPoints += 1;
    guestPointsEl.textContent = guestPoints;
    gtp = guestTotalPointsEl.textContent = "Total: " + guestPoints; 
}


function add2Guestpoints() {
    guestPoints += 2;
    guestPointsEl.textContent = guestPoints;
    gtp = guestTotalPointsEl.textContent = "Total: " + guestPoints;     
}


function add3Guestpoints() {
    guestPoints += 3;
    guestPointsEl.textContent = guestPoints; 
    gtp = guestTotalPointsEl.textContent = "Total: " + guestPoints; 
}

function winnerPoints() {
    if (gtp > htp) {
        winningTeamEL.textContent = "GUESTS WINS";
    }
    
    else if (htp > gtp) {
        winningTeamEL.textContent = "HOME WINS";
    }
    
    else {
        winningTeamEL.textContent = "TEAMS DRAW";
    }
}