// Variables 
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const missed = 0;
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
        document.querySelector('#phrase ul').appendChild(list).classList.add('letter');
        
    }
}

addPhraseToDisplay(getRandomPhraseAsArray(phrases));



// check if the clickedLetter is in the phrase
function checkletter(startButton) {
    // store all elements with the class .letter
    const liElements = document.querySelectorAll('.letter');
    // create variable match
    const matchFound = null;
    // loop over all .letters and see if they match the clickedLetter
    for (var i = 0; i < liElements.length; i++) {
        // if clickedLetter === .letter 
        if (startButton === liElements[i].textContent) {
            // add .show class to the .letter
            document.addClass('show');
            // store the clickedLetter in match variable.
            const match = liElements[i].textContent
            // return match;
            return matchFound;
    }
}

checkletter(addPhraseToDisplay(phrases));


    
/* check if the game has been won or lost 
the event listener should be listening for 
a user to press a button on the on
screen keyboard, not the physical keyboard 
of the computer */

// listen for the on screen keyboard to be clicked
qwerty.addEventListener('click', (e) => {
    // filter out clicks that dont happen on buttons
    if (e.target.tagName === 'BUTTON') {
        // add chosen class to pressed button
        btn.classList.addClass('chosen');
        // call checkletter - store results in a variable
        let pushButton = checkletter;
        // if no letter found remove one heart, increment missed counter
} else {

}
});

