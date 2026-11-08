(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme");

  function label() {
    var dark = root.dataset.theme === "dark";
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }

  btn.addEventListener("click", function () {
    var next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    label();
  });

  label();
  document.getElementById("year").textContent = new Date().getFullYear();
})();