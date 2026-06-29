console.log("Welcome to VS Code Learning Hub");

// ปุ่มเริ่มเรียน
const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.addEventListener("click", function () {
        // นำไปยังหน้า Install (เริ่มต้นแรกต้องติดตั้ง)
        window.location.href = "install.html";
    });
}

// ปุ่ม GitHub
const githubBtn = document.getElementById("githubBtn");

if (githubBtn) {
    githubBtn.addEventListener("click", function () {
        // นำไปยังหน้า GitHub
        window.location.href = "github.html";
    });
}

// Dark Mode Toggle
const darkButton = document.getElementById("darkMode");

if (darkButton) {
    darkButton.addEventListener("click", function(){
        document.body.classList.toggle("dark");
        // บันทึก preference ของ user
        localStorage.setItem("darkMode", document.body.classList.contains("dark"));
    });
}

// Load dark mode preference
window.addEventListener("load", function() {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark");
    }
});

// ฟังก์ชันเปิด External Links
function openVSCode(){
    window.open("https://code.visualstudio.com","_blank");
}

function openGit(){
    window.open("https://git-scm.com","_blank");
}

function openNode(){
    window.open("https://nodejs.org","_blank");
}

// ฟังก์ชันคัดลอก Command
function copyCommand(id) {
    const element = document.getElementById(id);
    if (!element) {
        alert("ไม่พบโค้ด!");
        return;
    }
    
    const text = element.textContent;
    navigator.clipboard.writeText(text).then(function() {
        alert("✓ คัดลอกสำเร็จ!\n\n" + text);
    }).catch(function(err) {
        alert("ไม่สามารถคัดลอกได้");
        console.error(err);
    });
}