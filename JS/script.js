
function userclick() {
    let text;
    let person = prompt ("Please enter your name: ")
    if (person == null || person == "") {
        text = "TELL ME YOUR NAME!";
    } else {
        text = "Hello " + person + "! How are you today";
    }
    document.getElementById("demo").innerHTML = text;
}