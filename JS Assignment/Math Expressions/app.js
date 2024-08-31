//Question 1
var addition = 3 + 5;
document.write("total of 3 + 5 = ", addition);

//Question 2
//part1
var subtract = 8 - 2;
document.write("<br>total of 8 - 2 = ", subtract);

//part2
var multiply = 6 * 3;
document.write("<br>total of 6 * 3 = ", multiply);

//part3
var divide = 40 / 5;
document.write("<br>total of 40 / 5 = ", divide);

//Question 3
var num;
document.write("<br> <br>  Value after variable declaration is ", num);
num = 5;
document.write("<br> initial value: ", num);
document.write("<br> value after increment is: ", ++num);
num = 5 + 7;
document.write("<br> value after addition is: ", ++num);
document.write("<br> value after decrement is: ", --num);
document.write("<br> the remainder is: ", num % 3);

//Question 4
var ticketPrice = 600;
document.write(
  "<br> <br> total cost to buy 5 tickets to a movie is : ",
  ticketPrice * 5,
  "PKR"
);

//Question 5
document.write("<br>")
for (i = 0; i < 10; i++) {
  document.write("<br>  2 x ", i + 1, " = ", (i + 1) * 2);
}

// //Question 6
// var Calcius = ;

//Question 7
var item1 = 650;
var item2 = 100;
var shippingFee = 100;
document.write("<br> <br> Price of item 1 is ", item1);
document.write("<br>  Quantity of item 1 is 3");
document.write("<br>  Price of item 1 is ", item2);
document.write("<br>  Quantity of item 2 is 7");
document.write("<br>  Shipping Charges Are ", shippingFee);
document.write("<br> Your total is  ", item1 * 3 + item2 * 7 + shippingFee);

//Question 8
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<br> <br> total marks: ", totalMarks);
document.write("<br>  obtained marks: ", marksObtained);
document.write("<br>  Percentage ", percentage);

//Question 9
var dollar = 104.8;
var riyal = 28;
document.write("<br> <br> Total Currency in PKR: ", dollar * 10 + riyal * 25);

//Question 10
var newNum = 8;
document.write("<br> <br> ", ((newNum + 5) * 10) / 2);

//Question 11
var birthYear = 2007;
var currentYear = 2024;
document.write("<br> <br> Current Year:", currentYear);
document.write("<br>  Birth Year:", birthYear);
document.write("<br>  Your Age is: ", currentYear - birthYear, " Years");

//Question 12
var radius = 20;
var pi = 3.142;
document.write("<br> <br> Radius of a circle: ", radius);
document.write("<br>  The circumference is: ", 2 * pi * radius);
document.write("<br> The area is: ", pi * radius * radius);

//Question 13
var favSnack = "Pakola";
var currentAge = 17;
var maxAge = 80;
var perDay = 2;
var totalSnacks = (maxAge - currentAge) * perDay;
document.write("<br> <br> Favorite Snack : ", favSnack);
document.write("<br> Current Age : ", currentAge);
document.write("<br> Max Age : ", maxAge);
document.write("<br> Amount : ", perDay);
document.write(
  "<br>  You will need ",
  totalSnacks,
  " ",
  favSnack,
  " to last you until old age of 80"
);
