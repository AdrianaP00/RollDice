const prompt = require("prompt-sync")();

let choice;

do {
  choice = inputMe();
  if (choice == 1) {
    rollDice();
  }
} while (choice != 2);

function rollDice() {
  let cpu = Math.floor(Math.random() * 6);
  console.log(cpu)
  let me = Math.floor(Math.random() * 6);
  console.log(me)

  let ret = compare(cpu, me);
  console.log(ret);
}

function compare(cpu, me) {
  if (cpu == me) {
    return "Tie";
  } else if (cpu < me) {
    return "You wins";
  } else {
    return "You lose";
  }
}

function inputMe() {
  console.log(`1 - start`);
  console.log(`2 - exit`);
  let menuChoice = prompt(``).toLowerCase();
  return menuChoice;
}