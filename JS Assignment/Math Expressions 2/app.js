//Question 1
var num = 10;
document.write("Result : <br> The value of a is", num);
document.write("<br> <br> The value of ++a is ", ++num);
document.write("<br> now the value is ", num);
document.write("<br> <br> The value of a++ is ", num++);
document.write(" <br> The value of a++ is ", num);
document.write("<br> <br> The value of --a is ", --num);
document.write("<br> now the value is ", num);
document.write("<br> <br> The value of --a is ", num--);
document.write("<br> now the value is ", num);

//Question 2
var a = 5;
var b = 4;
var result = --a - --b + ++b + b--;
document.write("<br> <br> a is ", a);
document.write(" <br> b is ", b);
document.write(" <br> result is ", result);

//Question 3
var visitorName = prompt("Welcome!\nWhat's your name?");
console.log(visitorName);

//Question 4
var table = +prompt("Tell me the number of table?", 5);
var tableStrength = +prompt(
  "Tell me the number of length you want to calculate?",
  10
);
for (i = 0; i <= tableStrength - 1; i++) {
  console.log(table, " x ", i + 1, " =", (i + 1) * table);
}

//Question 5
alert("You can check your results percenrage here");
var firstSubject = prompt("Your Physics Marks :");
var secondSubject = prompt("Your Chemistry Marks :");
var thirdSubject = prompt("Your Math Marks :");
var firstSubjectMarks = firstSubject;
var secondSubjectMarks = secondSubject;
var thirdSubjectMarks = thirdSubject;
var yourTotalMarks = firstSubject + secondSubject + thirdSubject;
