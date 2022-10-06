let order = true;
document.querySelector(".bars").onclick = () => {
  document.querySelector(".bars").classList.toggle("barsclick");
  if (order == true) {
    document.querySelector(".left").style.transform = "translate(0px, 0px)";
    order = false;
  } else {
    document.querySelector(".left").style.transform = "translate(-225px, 0px)";
    order = true;
  }
};
document.querySelector(".left .may img").onclick = () => {
  document.querySelector(".boximg").style.display = "flex";
  document.querySelector(".boximg").onclick = () => {
    document.querySelector(".boximg").style.display = "none";
  };
};
let rightdiv = Array.from(document.querySelectorAll(".right > div"));
let arrnav = Array.from(document.querySelectorAll(".left li a"));
console.log(arrnav);
window.onscroll = () => {
  rightdiv.forEach((d) => {
    if (d.offsetTop - 10 <= scrollY) {
      arrnav.forEach((n) => {
        n.dataset.gold == d.id
          ? n.classList.add("active")
          : n.classList.remove("active");
      });
    }
  });
};
