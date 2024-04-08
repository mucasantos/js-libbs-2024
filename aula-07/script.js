//fetch => 

//getPets()
/*
async function getPets() {
    //Comando fetch usando async/await
    const response = await fetch("https://rickandmortyapi.com/api/character/?page=1")
    const pets = await response.json()
    console.log(pets.results)
}
*/

const urlRick = "https://rickandmortyapi.com/api/character/?page=1";
const main = document.getElementById("container");

fetch(urlRick, )
    .then(rest => rest.json() )
    .then(data => cards(data))

function cards(data) {

    const dataArray = data.results;
    //Criar os cards de forma automática

    dataArray.forEach(element => {
        const card = document.createElement("div");
        card.className = "card"
        card.innerHTML = `
        <img src=${element.image} alt=${element.name}>
        <div class="names">
            <h3>Nome:</h3>
            <h3>${element.name}</h3>
        </div>
        <div class="specie">
            <h3>Espécie:</h3>
            <h3>${element.species}</h3>
        </div>
        <div class="status">
            <h3>Status:</h3>
            <h3>${element.status}</h3>
        </div>
        `
        
        main.appendChild(card)
    });

}