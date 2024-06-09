//when plus button is pressed it will append the div called big-container to the
//end of the script
const plusButton = document.querySelector('#plusButton');
const container = document.querySelector('#big-container');
const textAreaBox = document.querySelector('textarea');

//event listeners
plusButton.addEventListener('click', () => {
    const clone = container.cloneNode(true);
    document.body.appendChild(clone);
});
textAreaBox.addEventListener('input', function() {
    const text = getTextFromBox();
    var countLabel = document.getElementById("count");
   countLabel.textContent = getWordCount(text);
});

document.getElementById('playButton').addEventListener("click", function (){
    // recieves text from textbox
    const text = getTextFromBox();

    console.log(text);
    console.log(getWordCount(text));


});



//returns the how many words are in a string
function getWordCount(text){
    //creates a word array that only contains the words from the text
    const words = text.split(/\s+/);
    let wordCount = words.length;
    //checks to see if there is an empty string at the end of the array
    if (words[words.length - 1] === "") {
        wordCount--;
    }
    return wordCount;
}

//will set the word count label on the HTML
function setWordCount(text){
    var countLabel = document.getElementById("count");
    countLabel.textContent = getWordCount(text);
}
function getTextFromBox(){
    const textBox = document.querySelector('textarea');
    const text = textBox.value;
    return text;
}

// TODO:
//notes if you have the link have the AI pull the data it self so i can have more info to go off
//incoperate button to choose AI podcast summary or just read it to you

