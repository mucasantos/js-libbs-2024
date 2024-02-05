/*
Utilizando o forEach, adicione a uma array no Javascript, todos os itens:
H1,
p, 
input,
button e 
ul.

querySelectorAll

*/ 

const meusH1 = document.querySelectorAll("h1");
const todosPs= document.querySelectorAll("p");
const labels= document.querySelectorAll("label");
const todosLi= document.querySelectorAll("li");

//uso for
const lis = document.getElementsByTagName("li")

console.log( lis.length);


meusH1.forEach(item => console.log(item.textContent));
todosPs.forEach(item => console.log(item.textContent));
labels.forEach(item => console.log(item.textContent));
todosLi.forEach(item => console.log(item.textContent));


