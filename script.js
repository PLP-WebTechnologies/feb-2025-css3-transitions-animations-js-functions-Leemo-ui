document.addEventListener("DOMContentLoaded", () => {
  const animateBtn = document.getElementById("animateBtn");
  const toggleThemeBtn = document.getElementById("toggleTheme");

  // Load saved theme preference
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(savedTheme);

  // Toggle theme and store in localStorage
  toggleThemeBtn.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("light") ? "light" : "dark";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // Trigger animation on button click
  animateBtn.addEventListener("click", () => {
    animateBtn.classList.remove("animate");
    void animateBtn.offsetWidth; // Trick to restart animation
    animateBtn.classList.add("animate");
  });
});
