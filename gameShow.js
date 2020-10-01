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
    let randomNumber = Math.floor(Math.random() * phrases.length);
    randomNumber.split('');
    return randomNumber;
}

getRandomPhraseAsArray(phrases);

// adds the letter of a string to the display
function addphraseToDispaly() {

}

// check if a letter is in the phrase
function checkLetter(startButton) {
    let liElements = ul.getElementsByTagName("li");
    let matchFound = null;
    for (start_value; start_value < end_value; start_value++) {
        answer = answer + start_value;
      }
}