//Trabalhando com data e hora
//Algumas funções matemáticas
//Funções e escopo de variáveis
//Revisa objetos

const horario = document.getElementById("horario");
const dia = document.getElementById("dia");
const diaData = document.getElementById("dia-data");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano");
const dataFormat = document.getElementById("data-format");
const random = document.getElementById("random");

let dataHora = new Date();
//Dia, mes, ano...

horario.innerText = dataHora;//Data completa
dia.innerText = dataHora.getDay();
diaData.innerText = dataHora.getDate();
//o mês começa a contar em 0; 0 a 11...
mes.innerText = dataHora.getMonth() + 1;

ano.innerText = dataHora.getFullYear();

//Atividade:
// Mostrar oo nome dia da semana e o nome do mês,
//de acordo com a data.
let diaSemana;
let mesAno;

switch (dataHora.getDay()) {
    case 1:
        diaSemana = "Segunda-feira"
        break;
    case 2:
        diaSemana = "Terça-feira"
        break;
    case 3:
        diaSemana = "Quarta-feira"
        break;
    case 4:
        diaSemana = "Quinta-feira"
        break;
    case 5:
        diaSemana = "Sexta-feira"
        break;
    case 6:
        diaSemana = "Sábado"
        break;
    case 7:
        diaSemana = "Domingo"
        break;
    default:
        diaSemana = "Erro..."
        break;
}

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio",
    "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

dataFormat.innerText = diaSemana + ", " + dataHora.getDate()
    + " de " + meses[dataHora.getMonth()]
    + " de " + dataHora.getFullYear() + "."

//Funções matemáticas que utilizaremos
Math.floor() // Arredonda pra baixo
Math.random()//retorna um num aletório entre 0 e 1
Math.round() //arredonda o num

//Gerar números aleatórios de 1 a 100

let number = Math.round((Math.random() * 100) + 1);
random.textContent = number;

