console.log("Welcome to VS Code Learning Hub");

// ปุ่มเริ่มเรียน
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {

    alert("ยินดีต้อนรับเข้าสู่บทเรียน!");

});

// ปุ่ม GitHub
const githubBtn = document.getElementById("githubBtn");

githubBtn.addEventListener("click", function () {

    alert("บทต่อไปเราจะเชื่อมไปยัง GitHub");

});const darkButton = document.getElementById("darkMode");

darkButton.addEventListener("click", function(){

document.body.classList.toggle("dark");

});function openVSCode(){

window.open("https://code.visualstudio.com","_blank");

}

function openGit(){

window.open("https://git-scm.com","_blank");

}

function openNode(){

window.open("https://nodejs.org","_blank");

}function copyCommand(id) {

    const text = document.getElementById(id).textContent;

    navigator.clipboard.writeText(text);

    alert("คัดลอกแล้ว : " + text);

}function copyCommand(id){

    const text = document.getElementById(id).textContent;

    navigator.clipboard.writeText(text);

    alert("คัดลอกแล้ว\n\n" + text);

}