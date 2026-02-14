const button = document.getElementById("toggle-theme");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if(savedTheme === "dark"){
    body.classList.add("dark")
    button.textContent = "☀️";
}

button.addEventListener("click", () =>{
    body.classList.toggle("dark");

    const isDark = body.classList.contains("dark");

    button.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
});