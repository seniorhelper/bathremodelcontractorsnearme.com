(function () {
  "use strict";
  var box = document.getElementById("score"), out = document.getElementById("tally");
  if (!box || !out) { return; }
  function tally() {
    var n = box.querySelectorAll("input:checked").length;
    out.textContent = "Score: " + n + " of 10" + (n >= 9 ? " - strong candidate" : n >= 7 ? " - ask about the gaps" : n > 0 ? " - keep looking" : "");
  }
  box.addEventListener("change", tally);
})();
