// This is our main function
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function reverse4(text: string): string {
    let newText: string = "";

    while (text != "") {
        newText += text.substring(text.length - 4);
        text = text.substring(0, text.length - 4);
    }

    return newText;
}

function fizzbuzz(numInput: number): void {

    for(let i: number = 1; i <= numInput; i++) {
        let text: string = "";
        let flag: boolean = false;

        if (i % 3 == 0) {
            text += "Fizz";
        }
        if (i % 13 == 0) {
            text += "Fezz";
            flag = true;
        }
        if (i % 5 == 0) {
            text += "Buzz";
        }
        if (i % 7 == 0) {
            text += "Bang";
        }
        if (i % 11 == 0) {
            if (flag) {
                text = "FezzBong";
            } else {
                text = "Bong";
            }
        }
        if (i % 17 == 0) {
           text = reverse4(text);
        }

        if (text == "") {
            console.log(i);
        } else {
            console.log(text);
        }
    }
}

rl.question("Give me maximum number: ", (answer) => {
    fizzbuzz(parseInt(answer));
    rl.close();
})