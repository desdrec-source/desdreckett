(function () {
  var root = document.querySelector("[data-journal]");
  if (!root) return;

  var tabs = root.querySelectorAll("[data-filter]");
  var rows = root.querySelectorAll("[data-cats]");
  var empty = root.querySelector("[data-empty]");

  function apply(filter) {
    var visible = 0;
    rows.forEach(function (row) {
      var show = filter === "all" || row.getAttribute("data-cats").split(" ").indexOf(filter) !== -1;
      row.hidden = !show;
      if (show) visible += 1;
    });
    if (empty) empty.hidden = visible > 0;
    tabs.forEach(function (tab) {
      tab.classList.toggle("is-on", tab.getAttribute("data-filter") === filter);
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      apply(tab.getAttribute("data-filter"));
    });
  });

  apply("all");
})();
