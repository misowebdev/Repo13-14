var imageThumTitles = document.querySelectorAll(".image-thum-title > h1");
var modal = document.querySelector("#myModal");
var closeModalBtn = document.querySelector(".close");
var embed = document.querySelector("#myEmbed");
var modalContent = document.querySelector(".modal-content");

imageThumTitles.forEach((el) => {
  el.addEventListener("click", () => {
    modal.style.display = "block";
    embed.src = el.getAttribute("link");
  });
});

closeModalBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
