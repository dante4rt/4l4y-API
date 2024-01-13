# 4l4y-api

A Node.js package that transforms input text with vowel repetition and random letter casing.

## Description

`4l4y-api` is a lightweight, easy-to-use text transformation tool. It alters the input text based on two distinct rules:
- For text less than or equal to 8 characters: Repetition of vowels and alternating case for each character.
- For text more than 8 characters: Randomizes the case of each character.

This package is ideal for generating unique and stylistically varied text outputs for applications such as creative writing, coding tutorials, or online forums.

## Installation

Install `4l4y-api` using npm:

```bash
npm install 4l4y-api
```

## Usage

Here's a quick example to get you started:

```javascript
const transformText = require('4l4y-api');
const readlineSync = require('readline-sync');

const inputText = readlineSync.question('Enter a text: ');
try {
    const resultText = transformText(inputText);
    console.log('The result is:', resultText);
} catch (error) {
    console.error(error.message);
}
```

## Features

- Easy to integrate into any Node.js project.
- Two distinct text transformation rules based on input length.
- Works with both short and long text inputs.
- Simple CLI interface for immediate text transformation.

## Contributing

Contributions are always welcome! Feel free to fork the repository and submit pull requests.

## Issues

If you find any bug or have a feature request, please file an issue on [GitHub](https://github.com/dante4rt/4l4y-api/issues).

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author

Muhammad Ramadhani (Dante4rt)

---

Happy Text Transforming!