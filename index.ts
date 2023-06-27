// This is our main function

function reverse4(text: string): string {
    let newText: string = "";

    while (text != "") {
        newText += text.substring(text.length - 4);
        text = text.substring(0, text.length - 4);
    }

    return newText;
}

function fizzbuzz(): void {

    for(let i: number = 1; i <= 1000; i++) {
        let text: string = "";

        if (i % 3 == 0) {
            text += "Fizz";
        }
        if (i % 13 == 0) {
            text += "Fezz";
        }
        if (i % 5 == 0) {
            text += "Buzz";
        }
        if (i % 7 == 0) {
            text += "Bang";
        }
        if (i % 11 == 0) {
            text += "Bong";
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

// Now, we run the main function:
fizzbuzz();