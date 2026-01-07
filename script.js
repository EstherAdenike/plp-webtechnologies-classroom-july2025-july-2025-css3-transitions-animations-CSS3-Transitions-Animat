function add(a = 10, b = 15) {
  let sum = a + b;
  return sum;
}

console.log(add());

document.getElementById("animateBtn").addEventListener("click", function () {
  const box2 = document.getElementById("box2");
  box2.classList.toggle("animate");
});
