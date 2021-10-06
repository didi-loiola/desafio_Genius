let order = [];
let clickedOrder = [];
let score = 0;

//let high-score = 0; fazer isso depois de terminado

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
    let coloredOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        ligthColor(elementColor, Number(i) + 1);
    }
}

let ligthColor = (element, number) => {
    time = time * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, tempo - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, tempo)
}

let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }

    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando a próximo nível`)
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder(clickedOrder.length) = color;
    createColorElement(color).classList.add('selected');

    setTimeOut(() => {
        createColorElement(color).classList.remove('selected');
    });

    checkOrder();
}