
function welcome() 
{
alert('Welcome to my website!');
}

function wrongPassword() 
{
var pass = prompt('Enter the Password:');
document.write("Error! Please Enter a valid password.<br><br>(Refresh page to go back)");
}

function message1() 
{
document.write("Hello Dear!<br><br>Hope you in fine condition.<br>Please refresh this page to go back.<br><br>Regards,<br>Aun Abbas");
}

function threeAlerts() 
{
alert('Basic structure of this website is designed through HTML.');
alert('All Stylings, colors and backgrounds are decorated by CSS');
alert('JavaScript is finally added to make it interactive.');
}

function message2() 
{
alert("This alert is being displayed as part of this website.");
}

function addElements()
{
alert("After closing this dialogue, see how the title (head) changes.");
}

function declareUsername()
{
var username;
alert("Variable declared as: var username");
}

function declareMyName()
{
var myName;
myName = prompt("Enter your full name:");
var message = "Full Name: " + myName;
alert(message);
}

function variableHelloWorld()
{
var message;
message = "Hello World";
alert(message);
}

function bioDataStudent()
{
var name = prompt("Enter Name of Student:");
var fname = prompt("Enter Father's Name:");
var dob = prompt("Enter Date of Birth:");
var regNo = prompt("Enter Registration number:");
var message = "Student " + name + " s/o " + fname;
alert(message);
message = "Born on " + dob;
alert(message);
message = "Registration number:" + regNo;
alert(message);
}

function email()
{
var email = prompt("Enter your email address: ");
var message = "Your Email address is " + email;
alert(message);
}

function messageBrowser()
{
var message = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
document.write(message);
}


function messageAlertBrowser()
{
var message = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(message);
document.write(message);
}

function age()
{
var age = prompt("Enter your age (years): ");
age = "Your age is " + age + " years";
alert(age);
}

function birthYear()
{
var birthYear = prompt("Enter your birth year: ");
age = "You were born in  " + birthYear;
alert(age);
}

function clothingStore()
{
var name = prompt("Enter Name of Customer:");
var product = prompt("Enter name of ordered product:");
var qty = prompt("Enter quantity of ordered product:");
var message = name + " ordered " + qty + " " + product + " on XYZ Clothing Store.";
document.write(message);
}

function legalVariables()
{
var variable1, variable2, variable3;

variable1 = "Aun Abbas";
variable2 = 1601;
variable3 = true;

document.writeln("Variable 1: " + variable1 + "<br>");
document.writeln("Variable 2: " + variable2 + "<br>");
document.writeln("Variable 3: " + variable3);
}

function illegalVariables()
{
var legalVariable1 = "legalVariable1";
var legal_variable_2 = "legal_variable_2";
var $price = "$price";
var camelCaseVariable = "camelCaseVariable";
var variable123 = "variable123";

var illegalVariable1 = "illegal-variable";
var illegal_variable_2 = "123variable";
var illegal_$price = "variable@symbol";
var space = "variable with space";
var keyword = "break"; 

document.write("<b>Legal Variable Names:</b><br><br>");
document.write("1. " + legalVariable1 + "<br>");
document.write("2. " + legal_variable_2 + "<br>");
document.write("3. " + $price + "<br>");
document.write("4. " + camelCaseVariable + "<br>");
document.write("5. " + variable123 + "<br><br><br>");

document.write("<b>Illegal Variable Names:</b><br><br>");
document.write("1. " + illegalVariable1 + "<br>");
document.write("2. " + illegal_variable_2 + "<br>");
document.write("3. " + illegal_$price + "<br>");
document.write("4. " + space + "<br>");
document.write("5. " + keyword + "<br>");
}

function rulesNaming()
{
document.write("<p> Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable</p>");
document.write("<p> Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name</p>");
document.write("<p> Variable names are case-sensitive</p>");
document.write("<p> Variable names should not be JS keywords</p>");
}

function add()
{
var number1 = +prompt("Enter the first number:");
var number2 = +prompt("Enter the second number:");

var add = number1 + number2;

document.write("Addition result: " + add);
}

function multiOperations()
{
var number1 = +prompt("Enter the first number:");
var number2 = +prompt("Enter the second number:");

var subtract = number1 - number2;
var multiply = number1 * number2;
var divide = number1 / number2;
var mod = number1 % number2;

document.write("Subtraction result: " + subtract + "<br>");
document.write("Multiplication result: " + multiply + "<br>");
document.write("Division result: " + divide + "<br>");
document.write("Modulus result: " + mod + "<br>");
}

function q23()
{
var myVariable;
document.write("Value after variable declaration is: " + myVariable + "<br>");
myVariable = 5;
document.write("Initial value: " + myVariable + "<br>");
myVariable++;
document.write("Value after increment is: " + myVariable + "<br>");
myVariable += 7;
document.write("Value after addition is: " + myVariable + "<br>");
myVariable--;
document.write("Value after decrement is: " + myVariable + "<br>");
var remainder = myVariable % 3;
document.write("The remainder is: " + remainder + "<br>");
}

function movieTicket()
{
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("<p>The cost of buying 5 movie tickets is: PKR " + totalCost);
}

function table()
{
var num = +prompt("Enter a number:");
document.write("<b>Multiplication Table for " + num + ":</b><br><br>");
for (var i = 1; i <= 10; i++) {
    var result = num * i;
    document.write(num + " x " + i + " = " + result + "<br>");
    }
}