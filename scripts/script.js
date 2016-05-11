document.addEventListener('DOMContentLoaded', function() {
initiateZombieRaces();
})  // All your code goes here... functions, variables, everything!

 
var player1 = document.getElementById('player1_strip');
var player2 = document.getElementById('player2_strip');

function initiateZombieRaces() {
    document.addEventListener('keyup', keyPress);
};



function keyPress (event) {
    if (event.which === 81) {
        updatePlayerPosition('player1_strip');
    }
    else if (event.which === 80) {
        updatePlayerPosition('player2_strip');
    }
};

function updatePlayerPosition (player) {
	playerPosition = document.getElementById(player);
	for (var i = 0; i < playerPosition.children.length - 1; i++) {
		if (playerPosition.children[i].className === 'active') {
			playerPosition.children[i].className = '';
			playerPosition.children[i].nextElementSibling.className = 'active';
			if (playerPosition.children[i].nextElementSibling === playerPosition.children[playerPosition.children.length -1]) {
				document.removeEventListener('keyup', keyPress);
			// end game here (point to a new function most likely)
        }
        else {
            break;
        }
    }
}
};