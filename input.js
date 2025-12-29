// How to accept user input 

// 1. EASY WAY: window prompt 
// 2. PROFFESIONAL WAY: HTML Textbox

// Window Prompt
// let username;

// username = window.prompt("What's Your Username?");
// console.log(username);

 document.getElementById('myButton').onclick = function(){
    username = document.getElementById('MyText').value;
    document.getElementById("myH1").textContent =`Hello ${username}`
 }

