const btn = document.querySelector("#btn");
const light = document.querySelector("#light");

btn.addEventListener("click", toggleBtn);

function toggleBtn() {
  btn.classList.toggle("active");
  light.classList.toggle("on");
}
