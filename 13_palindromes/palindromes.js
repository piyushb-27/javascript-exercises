const palindromes = function (str) {
    const punctuationMarks = [
    ".", "?", "!", ",", ";", ":", 
    "'", '"', "“", "”",
    "(", ")", "[", "]", "{", "}", "<", ">", 
    "—", "-", "-", 
    "…", "@", "#", "$", "%", "&", "*", "/", "\\", "|", "^", "_", "~", "`", "=", "+"
    ];

    str = str.toLowerCase()
    let arrOfLetters = (str.split('')).filter((element)=> element!=' ' && !(punctuationMarks.includes(element)))
    let orgStr = arrOfLetters.join('')
    arrOfLetters.reverse()
    reversedString = arrOfLetters.join('')
    if (reversedString===orgStr) return true
    else return false
};

// Do not edit below this line
module.exports = palindromes;
