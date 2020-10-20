// Variables 
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
let missed = 0;
const phrases = ['keep your hair on', 
                'cut and dried', 
                'by hook or by crook', 
                'in all honesty', 
                'boots on the ground'
];

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    // Hide overlay screen
    overlay.style.display = 'none';
    // set the number of misses to zero
    let missed = 0;
    // remove phrase il elements
    let phraseUl = document.querySelector('#phrase ul'); 
    phraseUl.innerHTML = li;
    // restore liveHeart images
    let lives = document.querySelectorAll('#scoreboard ol li img');
    for ( let i = 0; i < lives.length; i++ ) {
        lives[i].setAttribute('src', 'images/liveHeart.png');
    }
    // remove the chosen class and disabled attribute from qwerty buttons
    let chosenElement = document.querySelectorAll('.chosen');
    for ( let i = 0; i < chosenElement.length; i++ ) {
        chosenElement[i].classList.remove('chosen');
    }

});


// return a random phrase from an array
function getRandomPhraseAsArray(phrases) {
    // create a variable to store a random
    const randomNumber = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomNumber];
    const randomPhraseAsArray = randomPhrase.split("");
    // return the array element at that index
    return randomPhraseAsArray
}

getRandomPhraseAsArray(phrases);

// adds the letter of a string to the display
function addPhraseToDisplay(phrases) {
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for (var i = 0; i < phrases.length; i++) {
        const list = document.createElement('li');
        list.innerHTML = phrases[i];
        document.querySelector('#phrase ul').appendChild(list)
        if (phrases[i] !== ' ') {
            list.className = 'letter';
        } else {
            list.className = 'space';
        }
    }
}

addPhraseToDisplay(getRandomPhraseAsArray(phrases));



// check if the clickedLetter is in the phrase
function checkletter(startButton) {
    // store all elements with the class .letter
    const liElements = document.querySelectorAll('.letter');
    // create variable match
    let matchFound = null;
    // loop over all .letters and see if they match the clickedLetter
    for (var i = 0; i < liElements.length; i++) {
        // if clickedLetter === .letter 
        if (startButton === liElements[i].textContent) {
            // add .show class to the .letter
            liElements[i].classList.add('show');
            // store the clickedLetter in match variable.
            matchFound = liElements[i].textContent;
            
    }
}
        // return match;
    return matchFound;
}


// listen for the on screen keyboard to be clicked
qwerty.addEventListener('click', (e) => {

    // filter out clicks that dont happen on buttons
    if (e.target.tagName === 'BUTTON') {

        // add chosen class to pressed button
        e.target.classList.add('chosen');
        
        if (e.target.className == 'chosen') {
            e.target.disabled = true;
        }

        // call checkletter - store results in a variable
        let letterFound = checkletter(e.target.textContent);

        // if no letter found remove one heart, increment missed counter
        if (letterFound === null) {  
            let liveHeart = document.querySelectorAll('.tries');
            let lostHeart = document.querySelectorAll('.tries img');
            lostHeart[0].src = 'images/lostHeart.png';
            liveHeart[0].className = '';
            missed += 1;
        } 
 
}
    checkWin()  
});



// check if the game is won or lost

function checkWin () {

    // Create a variable to store the li elements that have the class name “letter”
    let letterOne = document.querySelectorAll('.letter');

    // Create a variable to store the li elements that have the class name “show”
    let show = document.querySelectorAll('.show');

    // Check if the length of the 2 variables are the same. If they are, display the win overlay
    if (letterOne.length === show.length) {

    // Create the win overlay by adding the “win” class to the start overlay.
    overlay.className = 'win';

    // Change the headline text of the start overlay to show a person won.
    document.querySelector('h2.title').innerHTML = 'You Win';

    //Change the display property of the overlay to “flex”
    overlay.style.display = 'flex';

    }

    // Check if the missed counter is greater than 4. If they are, display the lose overlay
    if (missed >= 5) {

    // Create the lose overlay by adding the “lose” class to the start overlay.
    overlay.className = 'lose';
    
    // Change the headline text of the start overlay to show a person lost.
    document.querySelector('h2.title').innerHTML = 'You Lose';    

    // Change the display property of the overlay to “flex”
    overlay.style.display = 'flex';

    }
    
}



