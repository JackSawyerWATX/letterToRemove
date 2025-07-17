const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Which letter of the alphabet would you like to remove? ", (letterToRemove) => {
  if (!letterToRemove || letterToRemove.length !== 1 || !/[a-zA-Z]/.test(letterToRemove)) {
    console.log("Please enter a single letter of the alphabet.");
    rl.close();
    return;
  }

  rl.question("Enter a block of text:\n", (userText) => {
    const regex = new RegExp(letterToRemove, "gi");
    const modifiedText = userText.replace(regex, "");
    console.log("\nHere is your modified text:\n" + modifiedText);
    rl.close();
  });
});
