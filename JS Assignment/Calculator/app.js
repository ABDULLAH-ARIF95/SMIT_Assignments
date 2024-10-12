var screenDiv = document.getElementsByClassName("display")[0];
var result;
function getValue(value) {
  switch (value) {
    case "=":
      if(screenDiv.innerText === ""){
        screenDiv.innerText = '0';
      }
      else {
       result = eval(screenDiv.innerText);
      screenDiv.innerText = result ;
      break;
    }
    case "":
      screenDiv.innerText = " ";
      break;
    case "back":
      screenDiv.innerText = screenDiv.innerText.slice(
        0,
        screenDiv.innerText.length - 1
      );
      break;
    default:
      screenDiv.innerText += value;
    }
  }
   