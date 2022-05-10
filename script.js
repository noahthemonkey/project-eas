
let number = 16;
let gridNumber = number * number

function promptFunction(){
    number = prompt('how many?')
    let gridNumber = number * number
        gridFunc(gridNumber)
        gridMaker()
}

function gridMaker() {
    document.getElementById('square-container').style.gridTemplateColumns = `repeat(${number}, 1fr)`;
}
gridMaker()

const newGrid = document.querySelector('#newGrid')
newGrid.onclick = () => {
    const myGrid = document.getElementById('square-container');
    while(myGrid.lastElementChild){
        myGrid.removeChild(myGrid.lastElementChild);
        
    }

    promptFunction()
}



const container = document.querySelector('#square-container')
function gridFunc(gridNumber){
    for(x=1; x<=gridNumber;x++) {
        const squarediv = document.createElement('div');
        squarediv.className = "square-" + x;

        squarediv.addEventListener('mouseover', function(){
            squarediv.style = 'background: blueviolet'
        })

        container.appendChild(squarediv);
    }
}

gridFunc(gridNumber)
