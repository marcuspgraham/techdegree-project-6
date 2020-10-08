/* Variables */
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const missed = 0;
const phrases = ['keep your hair on', 'cut and dried', 'by hook or by crook', 'in all honesty', 'boots on the ground'];

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});


// return a random phrase from an array
function getRandomPhraseAsArray(phrases) {
    const randomNumber = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomNumber];
    const randomPhraseAsArray = randomPhrase.split("");
    return randomPhraseAsArray
}

getRandomPhraseAsArray(phrases);

// adds the letter of a string to the display
function addPhraseToDisplay(phrases) {
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for (var i = 0; i < phrases.length; i++) {
        const list = document.createElement('li');
        list.innerHTML = phrases[i];
        document.querySelector('#phrase ul').appendChild(list).classList.add('letters');
        
    }
}

addPhraseToDisplay(getRandomPhraseAsArray(phrases));


// check if a letter is in the phrase
function checkletter(startButton) {
    const liElements = ul.getElementsByTagName('li');
    const matchFound = null;
    for (var i = 0; i < phrases.length; i++) {
        //Do something
        if (startButton === ) {

        }
    }
}

// console.log(phrases[i]);
