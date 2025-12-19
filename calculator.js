const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const resultEl = document.getElementById("result");

function getNumbers() {
  const a = Number(aInput.value);
  const b = Number(bInput.value);
  return { a, b };
}

function calc(op) {
  const { a, b } = getNumbers();

  let res;
  if (op === "add") res = a + b;
  if (op === "sub") res = a - b;
  if (op === "mul") res = a * b;

  resultEl.textContent = res;
}

document.querySelectorAll("button[data-op]").forEach((btn) => {
  btn.addEventListener("click", () => calc(btn.dataset.op));
});

document.getElementById("clear").addEventListener("click", () => {
  aInput.value = "";
  bInput.value = "";
  resultEl.textContent = "—";
});
