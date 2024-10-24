function addWord() {
  var inpElm = document.getElementById("input").value;
  var vovels = document.getElementById("vowels");
  var cons = document.getElementById("consonants");
  if (inpElm === "") {
    document.getElementById("request").innerText = "Please! Input The Value";
    return;
  } else {
    document.getElementById("request").innerText = "";
  }
  var newWord = document.createElement("p");
  newWord.innerText = inpElm;
  if (
    inpElm.indexOf("a") !== -1 ||
    inpElm.indexOf("e") !== -1 ||
    inpElm.indexOf("i") !== -1 ||
    inpElm.indexOf("o") !== -1 ||
    inpElm.indexOf("u") !== -1 ||
    inpElm.indexOf("A") !== -1 ||
    inpElm.indexOf("E") !== -1 ||
    inpElm.indexOf("I") !== -1 ||
    inpElm.indexOf("O") !== -1 ||
    inpElm.indexOf("U") !== -1
  ) {
    vovels.appendChild(newWord);
  } else {
    cons.appendChild(newWord);
  }
  document.getElementById("input").value = "";
}
