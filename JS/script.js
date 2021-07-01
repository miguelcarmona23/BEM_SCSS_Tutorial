
function userclick() {
    let text;
    let person = prompt ("Please enter your name: ")
    if (person == null || person == "") {
        text = "TELL ME YOUR NAME!";
    } else {
        text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = text;
}

function myFunction() {
    let x = document.getElementById("numb").value;
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
        text = "THAT'S NOT A NUMBER!!!"
    } else {
        text = "That most certainly is a number"
    }
    document.getElementById("answer").innerHTML = text;
}