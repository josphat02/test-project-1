// script.js
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.querySelector(button).addEventListener('click',) function(event) {
        event.preventDefault();
    });
    var name = document.getElementById('name').value; 
    var greetingMessage = document.getElementById('greetingMessage');
    
    if (name) {
        greetingMessage.textContent = 'Hello, ' + name + '! Welcome to my website.';
    } else {
        greetingMessage.textContent = 'Hello! Please enter your name.';
    }
});