const args = process.argv.slice(2);
const userChoice = args;
const str = userChoice[0];
const shift = Number(userChoice[1]);

// Function to perform Caesar cipher on a string
function caesarCipher(str, shift) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerAlphabet = alphabet.toLowerCase(); // Create a lowercase alphabet

  return str
    .split("") // Split the string into characters
    .map((char) => {
      // Map each character to its cipher equivalent
      if (alphabet.includes(char)) {
        // Check if the character is in the alphabet
        const index = alphabet.indexOf(char);
        return alphabet[(index + shift) % 26]; // Shift the character by the shift amount
      } else if (lowerAlphabet.includes(char)) {
        // Check if the character is in the lowercase alphabet
        const index = lowerAlphabet.indexOf(char);
        return lowerAlphabet[(index + shift) % 26]; //  Shift the character by the shift amount
      } else {
        return char; // Return the character unchanged if it is not in the alphabet
      }
    })
    .join(""); // Join the characters back into a string
}

console.log(caesarCipher(str, shift));
