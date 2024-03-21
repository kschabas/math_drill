
function ResetGame() {
    index = displayRandomWord();
    correct_radio_index = displayDefinitions(index);
    document.getElementById('correct').textContent = `Correct: ${num_correct}`;
    document.getElementById('incorrect').textContent = `Wrong: ${num_wrong}`;
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`word${i}`).checked = false;
    }
}

function ButtonPush() {
    var radio_num = GetRadioIndexSelected();
    console.log(`You selected ${radio_num}`);
    if (radio_num == -1) {
        window.alert("Please select one of the options before clicking Submit");
    }
    if (radio_num == correct_radio_index)
    {
        CorrectAnswer();
    }
    else
    {
        IncorrectAnswer();
    }
    ResetGame();
}

function CorrectAnswer() {
    num_correct += 1;
    document.getElementById('vocab-score').style.backgroundColor = 'green';
}

function IncorrectAnswer() {
    num_wrong += 1;
    document.getElementById('vocab-score').style.backgroundColor = 'red';
}

function GetRadioIndexSelected() {
    for (let i = 1; i <= 5; i++) {
        if (document.getElementById(`word${i}`).checked) {
            return i;
        }
    }
    return -1;
}

var index;
var correct_radio_index;
var num_correct = 0;
var num_wrong = 0;
const button = document.querySelector('#submit');
button.addEventListener('click',ButtonPush);

function displayRandomWord() {
    const index = Math.floor(Math.random() * words.length);
    console.log(words[index]);

    document.querySelector('#quizword').textContent = words[index];

    return index;
}

function displayDefinition(index,place_index) {
    console.log(place_index);
    document.querySelector(`#Def${place_index}`).textContent = defs[index];
}

function displayDefinitions(index) {
    const correct_place_index = Math.floor(Math.random() * 5) + 1;
    displayDefinition(index,correct_place_index);

    for (let def_place_index = 1; def_place_index <= 5; def_place_index++) {
        if (def_place_index != correct_place_index) {
            var next_def = index;
            while (next_def == index)
            {
                next_def = Math.floor(Math.random() * words.length);
            }
            displayDefinition(next_def,def_place_index);
        }
    }
    return correct_place_index;
}

ResetGame();