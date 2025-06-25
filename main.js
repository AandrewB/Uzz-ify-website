document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("uzzifyButton");
  const input = document.getElementById("wordInput");
  const result = document.getElementById("result");

  button.addEventListener("click", function () {
    const word = input.value;
    if (word) {
      const uzzifiedWord = uzzify(word);
      result.textContent = uzzifiedWord;
    } else {
      result.textContent = "Please enter a word.";
    }
  });

  function uzzify(word) {
    let word_array = word.split("");
    const vowels = ['a', 'i', 'o', 'u'];
    for (let i = word_array.length - 1; i >= 0; i--) {
      let letter = word_array[i].toLowerCase();
      if (vowels.includes(letter)){
        return word_array.slice(0, i).join("") + "uzz";
      } 
    }
  }
});
