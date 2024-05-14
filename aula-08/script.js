/**
  {
	"name": "Samuel",
	"phone": 12345678,
	"email": "muca@email.com",
	"image": "http://",
	"city": "Caracas City",
	"state": "SP",
}
 * 
 */

//Pegar as informações do FORM e trazer para o JS,
//e quando clicar em ENVIAR, mostrar no terminal.

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  //Capturei os dados do form
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const fone = document.getElementById("phone");
  const password = document.getElementById("password");
  const city = document.getElementById("city");
  const state = document.getElementById("state");

  e.preventDefault();

  //transformar os dados em JSON

  const userData = JSON.stringify({
    name: name.value,
    email: email.value,
    phone: fone.value,
    password: password.value,
    city: city.value,
    state: state.value,
    image: ""
  });
  //Enviar para o servidor!! FETCH (POST)
  fetch("http://10.92.198.38:3001/signup", {
    method: "Post",
    body: userData,
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
