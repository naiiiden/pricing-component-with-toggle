document.getElementById("toggle").addEventListener("click", () => {
    document.getElementById("show").classList.toggle("show_monthly");
    if (document.querySelector(".sr-only").textContent == "Monthly pricing") {
        document.querySelector(".sr-only").textContent = "Anually pricing";
    } else {
        document.querySelector(".sr-only").textContent = "Monthly pricing";
    };
});