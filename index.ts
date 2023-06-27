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

function newFunc(text: string, num: number, numToCheck: number): string {
    if (numToCheck % num == 0){
        return text;
    }
    return "";
}

function fizzbuzz(numInput: number, rules: Record<string, boolean>, userDefined: Record<string, number>): void {
    for(let i: number = 1; i <= numInput; i++) {
        let text: string = "";
        let flag: boolean = false;

        if (i % 3 == 0 && rules["-Fizz"]) {
            text += "Fizz";
        }
        if (i % 13 == 0 && rules["-Fezz"]) {
            text += "Fezz";
            flag = true;
        }
        if (i % 5 == 0 && rules["-Buzz"]) {
            text += "Buzz";
        }
        if (i % 7 == 0 && rules["-Bang"]) {
            text += "Bang";
        }
        if (i % 11 == 0 && rules["-Bong"]) {
            if (flag) {
                text = "FezzBong";
            } else {
                text = "Bong";
            }
        }

        Object.entries(userDefined).forEach(([key, values]) => text += -newFunc(key, values, i));

        if (i % 17 == 0 && rules["-rev"]) {
           text = reverse4(text);
        }

        if (text == "") {
            console.log(i);
        } else {
            console.log(text);
        }
    }
}
function main(): void {
    const rules: Record<string, boolean> = {
        "-Fizz": false,
        "-Buzz": false,
        "-Bang": false,
        "-Bong": false,
        "-rev": false
    }
    rl.question("Give me some rules and a max\n-Fizz\n-Buzz\n-Bang\n-Bong\n-rev\n-new(num,text)\nexample: -Fizz -Buzz -new(2,Fuzz) 100\n", (answer) => {

        let rulesToSet: string[] = answer.split(" ");
        let maxNum: number = parseInt(rulesToSet[rulesToSet.length - 1])
        let ud: Record<string, number> = {};
        let num: number = 0;
        let text: string = "";
        rulesToSet.splice(rulesToSet.length - 1, 1);

        for (let entry of rulesToSet) {
            rules[entry] = true;
            if (entry.includes("-new")) {
                const regex = /-new\((\d+),\s*(\w+)\)/;
                const match = entry.match(regex);

                if (match) {
                   num = parseInt(match[1]);
                   text = match[2];
                }
                ud[text] = num;
            }
        }

        fizzbuzz(maxNum, rules, ud);

        rl.close();
    })
}

main();
