//Pegar os dados do formulário
const fname = document.getElementById("fname");
const end = document.getElementById("end");
const email = document.getElementById("email");
const fone = document.getElementById("fone");

const btnSubmit = document.getElementById("btn")

//Criar uma lista vazia
const data = [];

//Para "ouvir" o click do botão, usamos o addEventListener
btnSubmit.addEventListener('click', function (event) {
    //não deixa o formulário se comportar como padrão, ou seja,
    //enviar os dados para próxima página/requisição
    event.preventDefault();

    //Criando objeto
    const pessoa = {
        nome: fname.value,
        endereco: end.value,
        email: email.value,
        fone: fone.value,

        favoritos: [
            {
                titulo: "A nova casa",
                autor: "Juca Bala",
                ano: 2025,
                genero: "Aventura"
            }

        ]
    }
    //Adicionar pessoa a lista
    data.push(pessoa);
    console.log(pessoa.favoritos)
    console.log(data)

})