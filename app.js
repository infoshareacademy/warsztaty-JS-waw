var numberOfSymbols = 8;
var symbols = [];

function prepareSymbols() {
    for (var i = 0 ; i < numberOfSymbols ; i++) {
        var n = i + 1;
    
        symbols.push(n, n)
    }
}

function shuffleSymbols() {
    var max = symbols.length;
    
    for (var i = 0 ; i < max ; i++) {
        var rand = Math.floor(Math.random() * max);

        var tmp = symbols[i];

        symbols[i] = symbols[rand]
        symbols[rand] = tmp
    }
}

function renderCards() {
    var container = document.querySelector('#app');
    var template = document.querySelector('#card-template');

    symbols.forEach(symbol => {
        var copy = template.cloneNode(true)

        copy.removeAttribute('id')
        copy.querySelector('.back').innerText = symbol

        container.appendChild(copy)
    })
}

prepareSymbols()
shuffleSymbols()
renderCards()

console.log(symbols)