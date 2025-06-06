window.addEventListener("load", function () {
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");
  const noThanks = document.getElementById("noThanks");

  overlay.style.display = "flex";

  closeBtn.addEventListener("click", function () {
    overlay.style.display = "none";
  });

  noThanks.addEventListener("click", function (e) {
    e.preventDefault();
    overlay.style.display = "none";
  });
});
