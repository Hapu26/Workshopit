const body = document.body;
const toggle = document.getElementById("a11y-toggle");

if (localStorage.getItem("a11y") === "true") {
  body.setAttribute("data-a11y", "true");
}

if (toggle) {
  toggle.addEventListener("click", () => {
    const enabled = body.toggleAttribute("data-a11y");
    localStorage.setItem("a11y", enabled);
  });
}
