let counterDead = 0;
let counterLost = 0;
getHole = index => document.getElementById(`hole${index}`);// выбор дыры по index
for ( holeIndex = 1; holeIndex < 10; holeIndex++ ) {
    let hole = getHole(holeIndex);
    // holeHandler - функция, которая запустится по клику
    hole.addEventListener( 'click', function() {
        if ( hole.classList.contains( 'hole_has-mole')){
            counterDead++;
            dead.textContent = counterDead;
        } else {
            counterLost++;
            lost.textContent = counterLost;
        }

        if (counterDead == 10 | counterLost > 5){
            //dead.textContent = counterDead; //?
            // playing = false;
            alert ('win');
            counterDead = 0;
            counterLost = 0;
            dead.textContent = counterDead;
        }
        else if (counterLost > 5 && counterDead < 10) {
            alert ('you loser');
            counterDead = 0;
            counterLost = 0;
            dead.textContent = counterDead;
        }

    });

}
replaceMole();