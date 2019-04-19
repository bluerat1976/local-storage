var nameKey = "key";

function handleName() {
    var name = prompt("input your name");
    var messageValue =
        name && name.length > 2 ? "Hello test user!" : "Hello guest!";
    localStorage.setItem(nameKey, messageValue);
    handleMessage();
}

function handleMessage() {
    document.getElementById("greet").innerHTML = localStorage.getItem(nameKey);
}

function handleReset() {
    localStorage.removeItem(nameKey);
    handleMessage();
}

var button = document.getElementById("button");

button.addEventListener("click", handleName);

var reset = document.getElementById("reset");

reset.addEventListener("click", handleReset);

handleMessage();