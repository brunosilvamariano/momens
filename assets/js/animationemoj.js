
document.addEventListener("DOMContentLoaded", function () {
    const toggleThemeBtn = document.getElementById("toggle-theme");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
        updateIcon(currentTheme);
    }

    toggleThemeBtn.addEventListener("click", function () {
        let theme = document.documentElement.getAttribute("data-theme");
        theme = theme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        updateIcon(theme);
    });

    function updateIcon(theme) {
        toggleThemeBtn.innerHTML =
            theme === "dark"
                ? '<i class="bi bi-sun"></i>'
                : '<i class="bi bi-moon"></i>';
    }
});

