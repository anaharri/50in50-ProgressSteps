const progress = document.querySelector("#progress"),
  circles = document.querySelectorAll(".circle"),
  prev = document.querySelector("#prev"),
  next = document.querySelector("#next"),
  toggleBtn = document.querySelector("#toggle");

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
    if (idx < currentActive) circle.classList.add("active");
    else circle.classList.remove("active");
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

toggleBtn.addEventListener("click", () => {
  let allElements = [
    ...circles,
    progress,
    prev,
    next,
    toggleBtn,
    document.querySelector("body"),
  ];

  allElements.forEach((element) => toggleTheme(element));
  toggleIcon();
});

function toggleTheme(element) {
  element.classList.toggle("dark");
}

function toggleIcon() {
  const icon = document.querySelector("i");

  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
}
