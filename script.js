let array = [];

function calculate() {
  let answer = math.eval(
    document.querySelector(".calculator__input").textContent
  );
  display_output(answer);
}

function display_output(answer) {
  document.querySelector(".calculator__output").textContent = answer;
}

function display() {
  document.querySelector(".calculator__input").textContent = array.join("");
}

function give_argument(clicked_id) {
  let a = String(clicked_id);
  array.push(a);
  return document.getElementById(clicked_id).textContent;
}

function purge() {
  document.querySelector(".calculator__input").textContent = null;
  document.querySelector(".calculator__output").textContent = null;
  array = [];
}
