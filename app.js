const progress = document.querySelector("#progress"),
  prev = document.querySelector("#prev"),
  next = document.querySelector("#next"),
  circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive < circles.length && currentActive++;

  update();
});

prev.addEventListener("click", () => {
  currentActive > 1 && currentActive--;

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  //doy a la barra azul de progreso el ancho proporcional a la cantidad de pasos completados
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) prev.disabled = true;
  else if (currentActive === circles.length) next.disabled = true;
  else {
    prev.disabled = false;
    next.disabled = false;
  }
}
