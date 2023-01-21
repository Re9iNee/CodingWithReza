type params = {
    word: string;
    char: string;
};
function countChar({ word, char: wantedChar }: params) {
    let matchesFound = 0;

    for (let character of word.split("")) {
        if (character === wantedChar) matchesFound++;
    }

    return matchesFound;
}

console.log(countChar({ word: "bible", char: "b" }));
