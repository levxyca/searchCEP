const enter = document.getElementById("cep");
const btn = document.getElementById("btn");
const result = document.querySelector(".result");

btn.addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault;
  const cep = enter.value;
  searchCEP(cep);
}

function searchCEP(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.text())
    .then((body) => {
      result.innerText = body;
    });
}
