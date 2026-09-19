(function () {
  document.querySelectorAll(".drop").forEach(function (drop) {
    var btn = drop.querySelector(".drop-btn");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = drop.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  document.addEventListener("click", function () {
    document.querySelectorAll(".drop.is-open").forEach(function (drop) {
      drop.classList.remove("is-open");
      var btn = drop.querySelector(".drop-btn");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  });
})();
