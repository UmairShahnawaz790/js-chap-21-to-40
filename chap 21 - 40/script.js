// Chapter 21 to 25

// Answer # 1
// let firstName = (prompt("Enter your First Name"));
// let lastName = (prompt("Enter your Last Name"));
// let fullName = firstName + " " + lastName ;
// console.log("Hello "+fullName+"!");


// Answer # 2
// let userInput = prompt(("My Favourite Phone is:"));
// document.write("My favourite phone is"+" "+userInput+" <br> ");

// var length = (userInput.length);
// console.log(length);
// document.write("lenght of string is"+" "+length);

// Answer # 3
// let user = "Pakistani";
// var index = user.indexOf('n');
// console.log(index);
// document.write("String : "+user+"<br>");
// document.write("Index of 'n' is"+ " "+index);

// Answer # 4
// let str = "Hello World";
// let lastIndex = str.lastIndexOf("l");
// document.write("String :"+" "+str+"<br>");
// document.write("Last index of 'l' is " +lastIndex);

// Answer # 5
// let str = "Pakistani";
// let index = 3
// let char = str.charAt(index);
// document.write("String :"+" "+str+"<br>");
// document.write("Character at index 3 is : "+char);

// Answer # 6
// let firstName = (prompt("Enter your First Name"));
// let lastName = (prompt("Enter your Last Name"));
// let fullName = firstName.concat(" ", lastName );
// console.log("Hello "+fullName+"!");


// Answer# 7
// let city = "Hyderabad";
// let result = city.replace("Hyder", "Islam");
// console.log(result);

// Answer # 8
// var message = "Ali and Sami are best friends. They play football and cricket together";
// var updatedMessage = message.replaceAll("and", "&");
// console.log(message);
// console.log(updatedMessage);


// Answer # 9
// let str = "472";
// let num = Number(str);
// document.write("Value :"+str+"<br>");
// document.write("Type: "+ typeof str+"<br>");
// document.write("Value: "+num+"<br>");
// document.write("Type: "+ typeof num);

// Answer # 10
// let userInput = "peanuts";
// let result = userInput.toUpperCase();
// console.log(userInput);
// console.log(result);

// answer # 11
// let userInput = "javascript";
// let titleCase = userInput.charAt(0).toUpperCase()+userInput.slice(1).toLowerCase();
// console.log(titleCase);

// Answer # 12
// let num = 453.549;
// let numtoString = num.toString();
// var result = numtoString.replace("." , "");
// console.log(result)
// console.log(typeof numtoString);

// Answer # 13
// let userInput = prompt("Enter your username");
// const specialSymbols = [33, 44, 46, 64];
// let containSpecialSymbol = [...userInput].some(char =>specialSymbols.includes(char.charCodeAt(0)));
// if(containSpecialSymbol){
//     alert("Username contains invalid Symbols. Plz enter a valid username !");
// } else {
//     alert("Username is valid" + userInput+ " !") ;
// }

// Answer # 14

// const bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// const userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/maam ?");
// const searchTerm = userInput.toLowerCase();
// let found = false;
// let foundIndex;

// for (let i =0; i < bakeryItems.length; i++) {
//     if(bakeryItems[i].toLowerCase() === searchTerm) {
//         found = true;
//         foundIndex = i;
//         break;
//     }
// }
// if(found){
//     alert(userInput + " is available at index " + foundIndex + " in our bakery!");
// } else {
//     alert("Sorry, " + userInput + " is not available in our Bakery.");
// }


// Answer # 15

// function validatePassword(password) {
//     if (password.length < 6) {
//         return "Pasasword must atleast 6 characters long.";
//     }

//     if(!NaN(password[0])) {
//         return "Password cannot begin with a number";
//     }

//     let hasLetter = false;
//     let hasDigit = false;

//     for (let char of password){
//         if((cahr >='a' && char <='z') || (cahr >='A' && char <='Z')) {
//             hasLetter = true;
//         } else if(char >= '0' && char <='9'){
//             hasDigit = true;
//         } else {
//             return"Password should only contains alphabets and numbers.";
//         }
//     }
//     if(!hasLetter || !hasDigit){
//         return "Password must contain both alphabets and numbers";
//     }
//     return "Valid Password";
// }

// function promptPassword(){
//     let password = prompt("Enter password:");
//     let result = validatePassword(password);

//     while (result !== "Valid password.") {
//         alert(result);
//         password = prompt("Please Enter a valid password:");
//         result = validatePassword(password);
//     }
//     alert("Password accepted!");
// }
// promptPassword();



// Answer # 16
// let uniName = "University of Karachi";
// let characters = uniName.split("");
// console.log(characters);


// Answer # 17
// let userInput = "Pakistan";
// let lastWord = userInput.charAt(userInput.length -1);
// console.log(lastWord);

// Answer # 18

// function countWordOccurences(sentence ,word) {
//      const regex = new RegExp( '\\b' + word + '\\b', 'gi');
//      const matches = sentence.match(regex) ;
//      return matches ? matches.length: 0;
// }
// const text = "The quick brown fox jumps over the lazy dog";
// const targetWord = "the";
// const count = countWordOccurences(text, targetWord) ;
// console.log("There are " + count + " occurence(s) of word "+targetWord);



// < ------------------------------------------------------------.>

// Chapter # 26 - 30

// Answer # 1
// let user = prompt("Enter the number");
// console.log(Math.round(user));
// console.log(Math.floor(user));
// console.log(Math.ceil(user));

// Answer # 2
// let user = prompt("Enter the negative number");
// console.log(Math.round(user));
// console.log(Math.floor(user));
// console.log(Math.ceil(user));

// Answer # 3
// let user = prompt("Enter the number");
// console.log(Math.abs(user));

// Answer # 4
// console.log(Math.round(Math.random()* 6));

// Answer # 5
// let num = (Math.round(Math.random()* 2 ));
// if(num == 2){
//     console.log("Heads")
// } else if(num == 1){
//     console.log("Tails");
// }

// Answer # 6
// let num = 100
// console.log(Math.floor(Math.random()* num));

// Answer # 7

// let userInput = prompt("Enter your weight in kilograms");
// document.write("The weight of user is " + userInput + " kgs");


// Answer # 8
// let secretNumber = 5
// let UserNumber = prompt("Enter the number between 1 and 10");
// if(UserNumber == 5){
//     alert("Congratulations..!");
// } else if(UserNumber !== secretNumber){
//     alert("Try Again!");
// }
// else {
//     alert("Plz enter any number between 1 and 10");
// }


// <---------------------------------------------------------------------------------->

 // Chaper 31 to 34

//  Answer #1
//  let date = new Date();
//  console.log(date);

// Answer # 2
// let date = new Date();
// let month = date.getMonth() + 1;
// alert("current month is " + month);

// Answer # 3
// let todaydate = new Date();
// let dayName = todaydate.toLocaleString('en-US' , {weekday: 'long'});
// let firstThreeLetters = dayName.substring(0, 3);
// // alert ('Today is ${firstThreeLetters}');
// console.log(firstThreeLetters);

// Answerv # 4

// let today = new Date();
// let dayOfWeek = today.getDay();
// if(dayOfWeek === 0 || dayOfWeek === 6){
//     console.log("Its Fun DAy");
// } else {
//     console.log("Its not fun day");
// }

// Answer # 5
// let today = new Date();
// let dayOfMonth = today.getDate();
// if( dayOfMonth <= 15 ){
//     console.log("First Fifteen Days of the Month");
// } else {
//     console.log("Last Days of Month");
// }

// ANswer # 6
// let minutesSinceEpoch = Math.floor(Date.now() / 60000);
// console.log(minutesSinceEpoch);


// Answer # 7
// let currentTime = new Date();
// let hour = currentTime.getHours();
// if(hour < 12 ){
//     alert("Its AM");
// } else{
//     alert("Its PM");
// }

// Answer # 8
// let laterDate = new Date(2020, 11, 31);
// console.log(laterDate);

// Answer # 9
// const firstRamdan = new Date(2015, 5, 18);
// const thisRamdan = new Date();
// const daysPast = Math.floor((thisRamdan - firstRamdan) / (1000 * 60 * 60 * 24));
// console.log(daysPast);

// Answer # 10
// const referenceDate = new Date();
// const beginningOf2015 = new Date(2015, 0, 1);
// const diffTime= referenceDate - beginningOf2015;
// const elapsedSeconds = Math.floor(diffTime / 1000);
// console.log(elapsedSeconds);

// Answer # 11
// let currentDate = new Date();
// let hours = currentDate.getHours();
// console.log("current hours : " , hours);
// currentDate.setHours(currentDate.getHours() + 1);
// console.log("UPdated date and time "+ currentDate);

// Answer # 12
// let todayDate = new Date();
// let currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// console.log("current date :" +todayDate);
// console.log("Date 100 years back: "+currentDate);

// Answer # 13
// let age = prompt("Enter your age");
// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - Number(age);
// console.log("Your birth year is: " + birthYear );

// Answer # 14









// <------------------------------------------------------------------------------------>

// Chapter # 35 to 38



