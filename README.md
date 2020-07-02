# _Dinosaur Hangman_

#### _Play a game of hangman with dinosaur names, 07.01.2020_

#### By _**Micheal Hansen & Brittany Lindgren**_

## Description

_An app for playing a game of hangman using dinosaur names._

## Specifications

| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program defines a board object** | User clicks New Game | Board = {} |
| **Program defines a word object** | User clicks New Word | Board = {word = {}} |
| **Program tracks guesses remaining** | None necessary | Board = {guessesRemaining = 10} |
| **Program instatiates the word object with a dinosaur word** | None Necessary | Board = {word = {'Stegosaurus'}} |
| **Program splits the word into letters** | None Necessary | Board = {word = {[S, T, E, G, O, S, A, U, R, U, S]}} |
| **Program has a display object for showing the user** | None Necessary | Board = {word = [S, T, E, G, O, S, A, U, R, U, S], display = [null, null, null, null, null, null, null, null, null, null, null]} |
| **Program gathers user input** | User clicks S | userInput = 'S' |
| **Program finds all letters in the word that match the input** | User Clicks S | indices = [0, 5, 10] |
| **Program updates display object with the matching letters** | None Necessary | Board = {... display = [S, null, null, null, null, S, null, null, null, null, S]} |
| **Program detects if a game is won** | display = {[S, T, E, G, O, S, A, U, R, U, S]} | "You Win" |
| **Program detects if a game is lost** | guessesRemaining = 0 | "Game Over" |


## Setup/Installation Requirements

Software Requirements
1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase.

Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. Double click index.html to open it in your web browser

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`git clone https://github.com/Sudolphus/Dinosaur-Hangman`
2. Navigate into the `Dinosaur-Hangman` directory in Visual Studio Code or preferred text editor
`code .`
3. Get the necessary packages `npm install`.
4. Compile the code `npm run build`.
5. Open index.html in Chrome or preferred browser:
`open dist/index.html`

This project uses GIPHY to provide GIFs. If you want the GIFs to work for you while you're developing, you'll need an API Key, which you can get at `https://developers.giphy.com/`. Once you have a GIF Key, you'll need to create a .env file in the project's root directory with the line `API_KEY = {Your Key Here}`

## Known Bugs

_None currently_

## Support and contact details

_Please reach out through my GitHub account._

## Technologies Used

* _HTML_
* _CSS (including Bootstrap)_
* _JavaScript (including jQuery)_
* _VSCode_

### License

MIT License.

Copyright (c) 2020 **_Micheal Hansen & Brittany Lindgren_**
