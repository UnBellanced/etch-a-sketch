// First, create the grid functions

const container = document.querySelector('#container');

const setRandColor = (sqrObject) => {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    sqrObject.setAttribute('style','background-color: rgb('+r+','+g+','+b+');');
}

const colorSquare = (squareObject, clStatus, counter) => {
    if(clStatus==false){
        squareObject.setRandColor(squareObject);
        return true; //update the colorStatus so that it doesn't get recolored
    }
    else{
        squareObject.style.filter = counter*10+10+'%'; // Make color darker
        counter++;
        return counter; //update the counter inside the element so we can see how many passes we made and calculate the filter value
    }
}

const createColumn = (squareCount) => {
    let newColumn = document.createElement('div');
    newColumn.setAttribute('class', 'gridColumn');
    container.appendChild(newColumn);
    for(let i=0; i<squareCount; i++){
        let gridSquare = document.createElement('div');
        gridSquare.setAttribute('class','gridSquare');
        gridSquare.addEventListener('mouseover', ()=>{
            setRandColor(gridSquare);
        });
        newColumn.appendChild(gridSquare);
    }
}

const createGrid = (columnCount) => {
    for(let i=0; i<columnCount; i++){
        createColumn(columnCount);        
    } 
}

createGrid(16); 
//Create the mouseover event listeners for the gridSquares in the loop above
//Create a button and create a click listener to fire a prompt that takes
//a new value for the amount of columns the grid should have and undo
//the existing grid to create the new one.


