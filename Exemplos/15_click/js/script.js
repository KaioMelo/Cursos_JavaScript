var btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  console.log("Clicou");
  console.log(this); // this está referenciando ao proprio evento

  this.style.color = "red";
});

// Click afetando outro evento

var title = document.querySelector("#title");

title.addEventListener("click", function () {
  console.log("teste");

  var subtitle = document.querySelector(".subtitle");
  subtitle.style.display = "none";
});

//  doubleClick

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", function () {
  console.log("click duplo");
});
