function isVowel(char) {
  return /[aeiouAEIOU]/.test(char);
}

function generateTextWithPatterns(inputText) {
  let result = '';
  let currentWord = '';
  let currentWordLength = 0;

  for (let i = 0; i < inputText.length; i++) {
    let perChar = inputText[i];

    if (/[a-zA-Z]/.test(perChar)) {
      currentWord += perChar;
      currentWordLength++;
    }

    if (isVowel(perChar)) {
      if (currentWordLength <= 8) {
        result += currentWord + perChar;
      } else {
        result += currentWord;
      }
      currentWord = '';
    } else {
      if (currentWordLength <= 8) {
        perChar = i % 2 === 0 ? perChar.toLowerCase() : perChar.toUpperCase();
      }
      result += perChar;

      if (perChar === ' ') {
        currentWordLength = 0;
      }
    }
  }

  return result;
}

function transformText(inputText) {
  if (!inputText.trim()) {
    throw new Error('Input text cannot be blank.');
  }

  if (inputText.length > 8) {
    return inputText
      .split('')
      .map((char) =>
        Math.random() < 0.5 ? char.toLowerCase() : char.toUpperCase()
      )
      .join('');
  } else {
    return generateTextWithPatterns(inputText);
  }
}

module.exports = transformText;
