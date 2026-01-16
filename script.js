// Welcome alert
alert("Welcome to my website!");

// Button click alert
document.querySelector("button").onclick = function(){
    alert("Button Clicked!");
}

// Form Validation
document.querySelector("form").onsubmit = function(){
    let name = document.querySelector("input").value;
    let email = document.querySelector("input[type='email']").value;
    let message = document.querySelector("textarea").value;

    if(name === ""){
        alert("Name is required");
        return false;
    }

    if(email === ""){
        alert("Email is required");
        return false;
    }

    if(message === ""){
        alert("Message cannot be empty");
        return false;
    }

    alert("Form submitted successfully!");
}