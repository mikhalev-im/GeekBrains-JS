function ChessTable(container, logArea) {
  this.container = container;
  this.rows = 8;
  this.cols = 8;
  this.logArea = logArea;

  var previousCell, priviousCellClass;

  this.createTable = function() {
    var td;
    this.container.appendChild(document.createElement('table'));
    for (var i = 0; i < this.rows; i++) {
      this.container.appendChild(document.createElement('tr'));
      for (var j = 0; j < this.cols; j++) {
        td = document.createElement('td');
        td.innerHTML = 'ABCDEFGH'.charAt(j) + (8-i);
        td.className = (i + j) % 2 ? 'black-cell' : 'white-cell';
        td.addEventListener('click', this.eventHandler);
        container.lastChild.appendChild(td);
      }
    }
    return true;
  }


  this.eventHandler = function(event) {
    function eventClick() {
      if (previousCell !== undefined) {
          previousCell.className = previousCellClass;
        } 
        previousCell = event.srcElement;
        previousCellClass = event.srcElement.className;
        event.srcElement.className = 'active';
        //Как сюда передать this.logArea класса, здесь this - это уже другое окружение
        logArea.value = log.value + "Текущий элемент " + event.srcElement.innerHTML + "\n";
      }

    function eventKey() {
      var temp, i = 0;
      switch (e.keyCode) {
          case 37:
            if (previousCell.previousSibling === null) break;
            temp = previousCellClass;
            previousCellClass = previousCell.previousSibling.className;
            previousCell.previousSibling.className = 'active';
            previousCell.className = temp;
            previousCell = previousCell.previousSibling;
            break;
          case 38:
            if (previousCell.parentElement.previousSibling === null) break;
            temp = previousCell;
            while (temp.previousSibling !== null) {
              i++;
              temp = temp.previousSibling;
            }
            temp = previousCellClass;
            previousCellClass = previousCell.parentElement.previousSibling.children[i].className;
            previousCell.parentElement.previousSibling.children[i].className = 'active';
            previousCell.className = temp;
            previousCell = previousCell.parentElement.previousSibling.children[i];
            break;
          case 39:
            if (previousCell.nextSibling === null) break;
            temp = previousCellClass;
            previousCellClass = previousCell.nextSibling.className;
            previousCell.nextSibling.className = 'active';
            previousCell.className = temp;
            previousCell = previousCell.nextSibling;
            break;
          case 40:
            if (previousCell.parentElement.nextSibling === null) break;
            temp = previousCell;
            while (temp.previousSibling !== null) {
              i++;
              temp = temp.previousSibling;
            }
            temp = previousCellClass;
            previousCellClass = previousCell.parentElement.nextSibling.children[i].className;
            previousCell.parentElement.nextSibling.children[i].className = 'active';
            previousCell.className = temp;
            previousCell = previousCell.parentElement.nextSibling.children[i];
            break;
          default: return;
        }
    }

    if (event.type === 'click') {
      eventClick();
    }
    else if (event.type === 'keydown') {
      eventKey();
    }
    else {
      return null;
    }
  }
}

window.onload = function() {
  var container = document.getElementById('container');
  var logArea = document.getElementById('log');
  var newChess = new ChessTable(container, logArea);
  newChess.createTable();
}