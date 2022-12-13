import wordBank from "./wordle-bank.txt";
export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
]

export const generateWordSet = async () => { 
  let wordSet;
  let todaysWord;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n")
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)]
      wordSet = new Set(wordArr)
  });
  return {wordSet, todaysWord};
}



/* Returns a random 5x5 board, using the official letter distribution.
export function RandomGrid() {
    // prettier-ignore
    const dice = ["AAAFRS", "AAEEEE", "AAFIRS", "ADENNN", "AEEEEM",
                  "AEEGMU", "AEGMNN", "AFIRSY", "BJKQXZ", "CCNSTW",
                  "CEIILT", "CEILPT", "CEIPST", "DHHNOT", "DHHLOR",
                  "DHLNOR", "DDLNOR", "EIIITT", "EMOTTT", "ENSSSU",
                  "FIPRSY", "GORRVW", "HIPRRY", "NOOTUW", "OOOTTU"];
    let chars = dice.map(cube => cube[Math.floor(Math.random() * cube.length)]);
    chars.sort(() => Math.random() - 0.5); // Shuffle the letters.
  
    const SIZE = 5;
    let grid = [];
    for (let row = 0; row < SIZE; row++) {
      grid[row] = [];
      for (let col = 0; col < SIZE; ++col) {
        grid[row][col] = chars[SIZE * row + col];
        if (grid[row][col] === "Q") 
            grid[row][col] = "Qu";
        if (grid[row][col] === "S") 
            grid[row][col] = "St";
      }
    }
    return grid;
  } */