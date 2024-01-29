/*
//nomes = ["Samuel", 17, { endereco: "Rua Maria, 123" },];

//Criei a Array
var nomes = new Array();

//Coloquei um elemento no inicio
nomes[0] = "Bruce";
//Adicionei mais elementos!
nomes.push(1977);
nomes.push(1978);
nomes.push(1979);
nomes.push(1970);

//var nomesAll = ["Kevin", "Ana", "joao", "Aninha", "Elefante", "Juca"];

//Organiza caracteres de forma crescente
console.log(nomesAll.sort());
//document.write(nomesAll);

for (let index = 0; index < nomesAll.length; index++) {
  const element = nomesAll[index];
  console.log(element);
}

nomesAll.forEach((element) => {
  console.log(element);
});
*/
const container = document.getElementById("container");


//Simular dados de servidor.
//Essa forma não será a forma final - apenas didática!

var array = [1, 2, 3, 4, 5];

var myCard = `
<div class="card">
        <img src="./images/watch.png" alt="watch">
        <h3>RELÓGIO</h3>
        <h5>Melhor relógio já visto!</h5>
        <h5>A prova d'água!</h5>

        <h2>R$60,00</h2>
        <button>COMPRAR</button>
      </div>

`;

for (let index = 0; index < array.length; index++) {
  container.innerHTML = container.innerHTML + myCard;
}
