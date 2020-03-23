var playground = createPlayground();

console.log(playground);


// will add object positions to the emply playground array
function renderPositions() {
    obj.position.forEach( ([rowIndex, cellIndex]) => {
      playground[rowIndex][cellIndex] = TYPE_COLORS[obj.type]
    })
    for (coords of stat)
      playground[coords[0]][coords[1]] = coords[2]
  }


function moveDown(obj) {
  console.log('moving down')
  // 1. get current object - done
  let currentObject = getCurrentObject();

  // 2. re-define objects - done
  console.log(stat)
 
  currentObject.position.forEach(position => (position[0] > 0 && (position[0] -= 1)))
  //console.log(objects)

  playground = createPlayground() 
  // 4. re-renderPositions

  // 5. re-renderPlayground

  renderPlayground()
}

function moveRight(obj) {
  console.log('moving right')
  let currentObject = getCurrentObject();
  //console.log(currentObject);
  currentObject.position.forEach(position => (position[1] < 5 && (position[1] += 1)))

  playground = createPlayground()
  // 4. re-renderPositions
  // 5. re-renderPlayground
  renderPlayground()
}

function moveLeft(obj) {
  console.log('moving left')
  let currentObject = getCurrentObject();
  currentObject.position.forEach(position => (position[1] > 0 && (position[1] -= 1)))
  playground = createPlayground();

  // 4. re-renderPositions
  // 5. re-renderPlayground
  renderPlayground()
}

function pauseGame() {
  console.log('pausing the game')
  clearInterval(gameInterval);
}

function checkPosition(){
  currentObject = getCurrentObject();
  for (cell of currentObject.position){
      if (!currentObject.position.some(function(ele){ return JSON.stringify(ele) === JSON.stringify([cell[0]-1, cell[1]]);}))
      {
        if (cell[0]-1 < 0 || typeof playground[cell[0]-1][cell[1]] != 'undefined')
            currentObject.state = 'static'
      }
  }
  if (currentObject.state == 'static'){
     for (cell of currentObject.position){
        let coords = cell;
        coords.push(TYPE_COLORS[currentObject.type]);
        console.log(coords)
        stat.push(coords);
     }
  }
}

function checkRow(){ 
  for (row of playground){
    var full = row.every(function (item){return item !== undefined;})
    console.log(full)
    //console.log(playground)
    if (full){   
        playground.splice(playground.indexOf(row), 1);
        playground.push(new Array(5).fill());
        console.log(playground)
      }
  }
 renderPlayground()  
}

renderPlayground()

// interval 1 second
var gameInterval = setInterval(() => {
  checkPosition();
  moveDown();
  checkRow();
}, 1000);