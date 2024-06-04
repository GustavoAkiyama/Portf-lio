const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark");
}

const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light");
}
const toggleThemeButton = document.getElementById('toggle-theme');

toggleThemeButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
        changeThemeToLight();
    } else {
        changeThemeToDark();
    }
});