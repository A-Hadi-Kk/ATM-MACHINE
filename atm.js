#! /usr/bin/env node
import inquirer from "inquirer";
let currentBalance = 10000;
const myPin = 12345;
const inputPin = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Enter your Pin: ",
});
if (inputPin.pin === myPin) {
    console.log(`Correct Pin!`);
    let action = await inquirer.prompt({
        message: "Select your concern: ",
        name: "options",
        type: "list",
        choices: ["Withdraw", "Fast Cash", "Check Balance"],
    });
    if (action.options === "Withdraw") {
        let enterAmount = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "Enter the Amount: ",
        });
        if (enterAmount.amount > currentBalance) {
            console.log("ThankYou for using this atm! ");
            console.log(`InSufficient Balance`);
        }
        else {
            currentBalance -= enterAmount.amount;
            console.log("ThankYou for using this atm! ");
            console.log(`Your Remaining Balance is : ${currentBalance} `);
        }
    }
    else if (action.options === "Check Balance") {
        console.log("ThankYou for using this atm! ");
        console.log(`Your Balance is : ${currentBalance}`);
    }
    else if (action.options === "Fast Cash") {
        let fast = await inquirer.prompt({
            message: "Select the amount: ",
            type: "list",
            name: "fastCash",
            choices: ["1000", "2000", "5000", "10000"],
        });
        currentBalance -= fast.fastCash;
        console.log("ThankYou for using this atm! ");
        console.log(`Your Remaining Balance is : ${currentBalance} `);
    }
}
else {
    console.log(`Incorrect Pin!`);
}
