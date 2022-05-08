
let gridNumber = 16;

function promptFunction(){
    gridNumber = prompt('how many?')
        gridFunc(gridNumber)
}


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
        squarediv.textContent = 'yo this is square ' + x

        squarediv.addEventListener('mouseover', function(){
            squarediv.style = 'background: blueviolet'
        })

        container.appendChild(squarediv);
    }
}

gridFunc(gridNumber)
