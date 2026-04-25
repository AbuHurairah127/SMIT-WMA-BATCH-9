"use strict";
document.getElementById("btn2").addEventListener("click", () => {
    var username = document.getElementById("password").value;
    document.getElementById("username-display").innerText = username;
});
document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("password").type = "text";
});
