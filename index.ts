import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function newFunc(text: string, num: number, numToCheck: number): string {
    if (numToCheck % num === 0){
        return text;
    }
    return "";
}

function fizzbuzz(numInput: number, rules: Record<string, boolean>, userDefined: Record<string, number>): void {
    for(let i: number = 1; i <= numInput; i++) {
        let result: string[] = [];
        let reverseFlag: boolean = false;

        if (i % 3 === 0 && rules["-Fizz"]) {
            result.push("Fizz");
        }
        if (i % 13 === 0 && rules["-Fezz"]) {
            result.push("Fezz");
            reverseFlag = true;
        }
        if (i % 5 === 0 && rules["-Buzz"]) {
            result.push("Buzz");
        }
        if (i % 7 === 0 && rules["-Bang"]) {
            result.push("Bang");
        }
        if (i % 11 === 0 && rules["-Bong"]) {
            if (reverseFlag) {
                result.push("FezzBong");
            } else {
                result.push("Bong");
            }
        }

        Object.entries(userDefined).forEach(([key, values]) => result.push(newFunc(key, values, i)));

        if (i % 17 === 0 && rules["-rev"]) {
           result = result.reverse();
        }

        if (result.join("").length === 0) {
            console.log(i);
        } else {
            console.log(result.join(""));
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

        const rulesToSet: string[] = answer.split(" ");
        const maxNum: number = parseInt(rulesToSet[rulesToSet.length - 1])
        const userDefinedRules: Record<string, number> = {};

        rulesToSet.splice(rulesToSet.length - 1, 1);

        for (let entry of rulesToSet) {
            rules[entry] = true;
            if (entry.includes("-new")) {
                const regex = /-new\((\d+),\s*(\w+)\)/;
                const match = entry.match(regex);

                if (match) {
                    const newRuleNumber = parseInt(match[1]);
                    const newRuleText = match[2];
                    userDefinedRules[newRuleText] = newRuleNumber;
                }

            }
        }

        fizzbuzz(maxNum, rules, userDefinedRules);

        rl.close();
    })
}

main();
