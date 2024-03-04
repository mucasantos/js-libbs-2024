const grid = document.getElementById("grid");
let maxNumbers = 25;
let qtdGenerate = 15;

document.getElementById("start").addEventListener('click', () => {

    //Função para gerar o número de 1 a 25
    function geraNum(max) {
        return Math.floor((Math.random()) * max) + 1;
    }

    function compareNumbers(a, b) {
        return a - b;
    }

    //Geração dos 15 números
    let finished = false;
    let numeros = [];


    while (!finished) {
        const element = geraNum(maxNumbers);

        if (numeros.length < qtdGenerate) {
            if (numeros.indexOf(element) === -1) {
                numeros.push(element);
            }
        } else {
            finished = true;
        }
    }
    numeros.sort(compareNumbers)
    grid.innerHTML = ""
    
    numeros.forEach(element => {
        let myelement = document.createElement('div')
        myelement.className = 'grid-item'
        myelement.innerText = element;
        grid.appendChild(myelement)
    })

})