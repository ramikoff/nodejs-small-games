const args = process.argv.slice(2);
const options = ["rock", "paper", "scissors"];
const userChoice = args[0];
const isInputValid = options.includes(userChoice) && args.length === 1;
const computerChoice = options[Math.floor(Math.random() * 3)];

if (!isInputValid) {
  console.log("Invalid input, please enter rock, paper, or scissors");
} else if (userChoice === computerChoice) {
  console.log(`It's a tie! Computer chose ${computerChoice}`);
} else if (
  (userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "scissors" && computerChoice === "paper") ||
  (userChoice === "paper" && computerChoice === "rock")
) {
  console.log(`You win! Computer chose ${computerChoice}`);
} else {
  console.log(`You lose! Computer chose ${computerChoice}`);
}
