const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let arr=[];
    let stack=[];
    let result="";
    for (let j = 0; j < expr.length;j += 10) {
        arr.push(expr.slice(j, j + 10));
    }
        for (let i = 0; i < arr.length; i++) {
            let letter = "";
            for (let j = 0; j < 10; j += 2) {
                if (arr[i][j] === `*`) {
                    letter += " ";
                    break;
                } else if (arr[i][j] === "1") {
                    switch (arr[i][j + 1]) {
                        case "0": letter += ".";
                        break;
                        case "1": letter += "-";
                        break;
                    }
                }
            }
            stack.push(letter);
        }

        for (let i = 0; i < stack.length; i++) {
            if (stack[i] === " ") {
                result += " ";
            } else {
                result += MORSE_TABLE[stack[i]];
            }
        }
        return result;
    }
module.exports = {
    decode
}