const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");

    // Enable link when panel is active
    const link = panel.querySelector("a");
    link.style.pointerEvents = "auto"; // Enable link
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");

    // Disable link when panel is not active
    const link = panel.querySelector("a");
    link.style.pointerEvents = "none"; // Disable link
  });
};
