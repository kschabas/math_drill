const button = document.querySelector('#submit');
button.addEventListener('click',e => {
    window.alert("Pushed the button")
});

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
}

const index = displayRandomWord();
displayDefinitions(index);