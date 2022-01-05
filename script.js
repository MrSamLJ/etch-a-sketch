//Create preset variables
let wrapper = document.querySelector('.wrapper');
let content = document.querySelector('.content');
let randomColorValue = '';
let colorShade = 10;
let buttonClicks = 0;
let grid = document.createElement('div');
let newGridSize = 256;
let gridSize = 16;
let blackModeCount = false;
let audio = new Audio("https://github.com/MrSamLJ/etch-a-sketch/raw/main/beep.aiff");

//Create wrapper and container elements
let subWrapper = document.createElement('div');
subWrapper.classList.add('subWrapper');
let heading = document.createElement('h1');
heading.textContent = "Etch-A-Sketch!";
subWrapper.appendChild(heading);
wrapper.appendChild(subWrapper);

let container = document.createElement('div');
container.classList.add('container');
subWrapper.appendChild(container);

// Add a button &  position to top of screen
let button = document.createElement('button');
button.textContent = "Change grid size";
button.classList.add('refresh-button');
content.appendChild(button);
button.addEventListener('click', () => {
refreshGrid();
audio.play();
});

// Create buttons
let blackButton = document.createElement('button');
blackButton.textContent = "Non-funky mode";
blackButton.classList.add('refresh-button');
content.appendChild(blackButton);
blackButton.addEventListener('click', () => {
    audio.play();
    blackBoxMode();
});

let FunkyButton = document.createElement('button');
FunkyButton.textContent = "Funky mode";
FunkyButton.classList.add('refresh-button');
content.appendChild(FunkyButton);
FunkyButton.addEventListener('click', () => {
audio.play();
FunkyBoxMode();
});

let refreshButton = document.createElement('button');
refreshButton.textContent = "Refresh";
refreshButton.classList.add('refresh-button');
content.appendChild(refreshButton);
refreshButton.addEventListener('click', () => {
    audio.play();
refreshGridToDefault();
});


squaresInGrid();

// Main function to build grid and grid elements

function squaresInGrid() {
    // If statement to clear div if refresh button clicked
   if (buttonClicks > 0)
    {
    container.removeChild(grid);
    } 
        grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);
// Loop uses a variable which can change if change grid size button clicked
    for (i = 0; i < newGridSize; ++i) {
     let element = document.createElement('div');
     element.classList.add('grid-item');
     let newHeight = element.style.width = (100 / gridSize) + '%';
     console.log(newHeight);
      let newWidth = element.style.height = (100 / gridSize) + '%';
      console.log(newWidth);
     element.addEventListener('mouseover', function mouseEnterFunctions() {
        randomColor();
        hoverStyle();
    --colorShade;
element.removeEventListener('mouseover', mouseEnterFunctions);
    });
     function hoverStyle() {
         if (blackModeCount === true)
         {element.style.backgroundColor = '#' + '000000';
      } else {
        element.style.backgroundColor = '#'+randomColorValue;
    }
        // element.style.opacity = (colorShade / 10); 
    }
function randomColor() {
    randomColorValue = Math.floor(Math.random()*16777215).toString(16);
}
          grid.appendChild(element);           
    }
    } 

//Function to be called on button click removing existing grid and replacing with a new one
function refreshGrid() {
++buttonClicks;
    gridSize = prompt("How big would you like the grid to be? (Maximum 100)");
    if (gridSize > 100) 
    {alert("Please enter a max grid size of 100!");
} else if (gridSize < 1)
 {alert("Please enter a grid with a min size of 1!");
} else {
newGridSize = gridSize * gridSize;
colorShade = 10;
squaresInGrid();
}

};

// Button click functions
function blackBoxMode() {
blackModeCount = true;
}

function FunkyBoxMode() {
    blackModeCount = false;
}

function refreshGridToDefault() {
    ++buttonClicks;
    squaresInGrid();
}