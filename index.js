//Import the inquirer  module which is a command line interface
import inquirer from "inquirer";
//import chalk
import chalk from "chalk";
//console starting message
console.log(chalk.italic.underline.yellow.bold("\t\t\n\n  Word Counter   \n"));
//Declare  a constant "answer" and assign it to the result  of sentence
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
// Split sentence into words
const words = answer.Sentence.trim().split(" ");
// Filter out numbers and count only words
const validWords = words.filter(word => isNaN(Number(word)));
// Calculate the word count by getting the length of the validWords array
const wordCount = validWords.length;
// Check if any character is found
if (wordCount === 0) {
    console.log(chalk.red.italic("\nNo valid words found. Please enter a sentence with words.\n"));
}
else {
    // Print the valid words array
    console.log(chalk.italic.magenta("\nValid Words in the sentence:", validWords));
    // Print the word count of the sentence
    console.log(chalk.italic.cyan.bold(`\nWord count of your sentence is ${wordCount}`));
}
