let turn = 0;

let playerHacker = "";
let playerCyber = "";

let expHacker = 0;
let expCyber = 0;

function main() {
	
	nextTurn(turn);
	answersCanvasElement.style.visibility = "visible";
	turnCanvasElement.style.visibility = "visible";
	
}

function nextTurn(id) {
	var titles = [
		"Hacker's turn (" + playerHacker + ")",
		"Cybersecurity engineer's turn (" + playerCyber + ")"
	]
	
	if (id != 20) {
		turnTitle.innerText = titles[id % 2];
		
		if (id % 2 == 0) {
			/* Hacker Turn */
			turnTitle.classList.remove("turn-cyber");
			turnTitle.classList.add("turn-hacker");

			answerOneInput.style.boxShadow = "var(--red) 0px 0px 25px";
			answerTwoInput.style.boxShadow = "var(--red) 0px 0px 25px";

			expHacker += Math.floor(1+ Math.random() * 4);
		} else {
			/* Cyber Turn */
			turnTitle.classList.remove("turn-hacker");
			turnTitle.classList.add("turn-cyber");

			answerOneInput.style.boxShadow = "var(--blue) 0px 0px 25px";
			answerTwoInput.style.boxShadow = "var(--blue) 0px 0px 25px";

			expCyber += Math.floor(1 + Math.random() * 4);
		}
		
		console.log(`expCyber:${expCyber}\nexpHacker:${expHacker}`);

		titleElement.innerText = data[id].question;
		answerOneInput.innerText = data[id].answers[0];
		answerTwoInput.innerText = data[id].answers[1];
		
		turn++;
	} else {
		turnCanvasElement.style.visibility = "hidden";
		answersCanvasElement.style.visibility = "hidden";
		
		if (expHacker > expCyber) {
			titleElement.innerText = playerHacker + " Won!";
		} else {
			titleElement.innerText = playerCyber + " Won!";
		}
	}
}

function startGame() {
	playerOneName = playerOneInput.value;
	playerTwoName = playerTwoInput.value;
	
	if (playerOneName == "") {
	    playerOneName = "Player 1";
	}
	
	if (playerTwoName == "") {
	    playerTwoName = "Player 2";
	}
	
	console.log(playerOneName);
	console.log(playerTwoName);
	
	/* Cacher le menu de d'input des pseudos */
	pseudoCanvasElement.style.visibility = "hidden";
	
	/* Attribue les pseudos */
	if (Math.random() < 0.5) {
		playerHacker = playerOneName;
		playerCyber = playerTwoName;
	} else {
		playerHacker = playerTwoName;
		playerCyber = playerOneName;
	}
	
	main();
}