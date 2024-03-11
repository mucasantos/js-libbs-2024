const main = document.getElementById("principal");

const myItems = [
    {
        color: 'blue',
        text: 'Primeiro item'
    },
    {
        color: 'green',
        text: 'Segundo item'
    },
    {
        color: 'brown',
        text: 'Terceiro item'
    }
]

myItems.forEach(item => {
    const meuH1 = document.createElement('h1');
    meuH1.innerText = item.text;

    meuH1.style.color = item.color


    main.appendChild(meuH1);
});