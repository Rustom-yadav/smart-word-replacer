
function isFirstCharUpper(word) {
  return /^[A-Z]/.test(word);
}

function myReplace(str, word, replaceWord) {
  if (!str.includes(word)) {
    return "sorry this word is not in the given sentence.";
  }
  
  const shouldCapitalize = isFirstCharUpper(word);

  const formattedReplace =
    (shouldCapitalize
      ? replaceWord[0].toUpperCase()
      : replaceWord[0].toLowerCase()
    ) + replaceWord.slice(1);

  return str.replace(word, formattedReplace); 
}

console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));

console.log(myReplace("hello world", "ram", "shyam"))

