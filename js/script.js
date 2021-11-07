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

function nextTurn(id, rep=0) {
	const titles = [
		`Hacker's turn (${playerHacker})`,
		`Cybersecurity engineer's turn (${playerCyber})`
	];

	if (id !== 20) {
		turnTitle.innerText = titles[id % 2];

		hackerPoints.innerHTML = expHacker;
		cyberPoints.innerHTML = expCyber;

		if (id % 2 === 0) {
			/* Hacker Turn */
			backgroundElement.classList.remove("turn-cyber");
			backgroundElement.classList.add("turn-hacker");

			answerOneInput.style.boxShadow = "var(--black) 0px 0px 25px";
			answerTwoInput.style.boxShadow = "var(--black) 0px 0px 25px";

			expHacker += data[id].points[rep];

		} else {
			/* Cyber Turn */
			backgroundElement.classList.remove("turn-hacker");
			backgroundElement.classList.add("turn-cyber");

			answerOneInput.style.boxShadow = "var(--black) 0px 0px 25px";
			answerTwoInput.style.boxShadow = "var(--black) 0px 0px 25px";

			expCyber += data[id].points[rep];
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
	playerOneName = playerOneInput.value !== "" ? playerOneInput.value : "Player 1";
	playerTwoName = playerTwoInput.value !== "" ? playerTwoInput.value : "Player 2";
	
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