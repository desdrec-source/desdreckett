(function () {
  var key = "dd-cookie-choice";
  if (localStorage.getItem(key)) return;

  var bar = document.createElement("div");
  bar.className = "cookie-bar";
  bar.innerHTML =
    '<p>We use essential cookies to run this site and YouTube cookies when videos load. Read the <a href="/cookies.html">Cookie Policy</a>.</p>' +
    '<div class="cookie-actions">' +
    '<button type="button" class="btn" data-choice="essential">Essential only</button>' +
    '<button type="button" class="btn btn-light" data-choice="accept">Accept</button>' +
    "</div>";
  document.body.appendChild(bar);

  bar.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-choice]");
    if (!btn) return;
    localStorage.setItem(key, btn.getAttribute("data-choice"));
    bar.remove();
  });
})();
