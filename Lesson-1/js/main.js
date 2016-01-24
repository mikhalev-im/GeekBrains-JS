function createTable (n, m) {
  /* 
    dataInner - массив из 2 элементов с параметрами для заполнения таблиц
                (рандом или шахматная доска)
    newTd - переменная для создания td в DOM дереве
    lastObject - массив для хранения предыдущего активного элемента в таблице (0 индекс) 
                 и его цвета (1 индекс) (нужно для движения по таблице).
  */

  var dataInner, newTd, i, lastObject = [];

  if (n === 'chess') {
    n = m = 8;
    dataInner = ['chessCell', 'chessColor'];
  }
  else {
    dataInner = ['randLetter', 'randColor'];
  }

  // Внутренняя функция для заполнения таблицы
  
  function generateData (data) {
    switch (data) {
      case 'randLetter':
        return ('абвгдеёжзийклмнопрстуфхцчшщъыьэюя').charAt(Math.floor(Math.random() * 33));
      case 'randColor':
        return '#' + (Math.floor(Math.random() * 255)).toString(16)
                   + (Math.floor(Math.random() * 255)).toString(16)
                   + (Math.floor(Math.random() * 255)).toString(16);
      case 'chessCell':
        return 'ABCDEFGH'.charAt(i) + (n+1);
        break;
      case 'chessColor':
        return (i + n) % 2 ? 'white' : 'black';
       default:
         return undefined;
     }
  }

  // Внутренняя функция для обработки событий

  function eventHandler (e) {

    // Функция для отображения содержимого активной ячейки
    function displayClicked (elem) {
      log.value = log.value + "Текущий элемент " + elem.innerHTML + "\n";
    }

  // Обработка событий
    // temp - Временная переменная для обработки событий
    var temp;
    switch (e.type) {
      case 'click':
        if (lastObject[0] !== undefined) {
          lastObject[0].style.backgroundColor = lastObject[1];
        } 
        lastObject[0] = this;
        lastObject[1] = this.style.backgroundColor;
        this.style.backgroundColor = '#009B95';
        displayClicked(this);
        break;
      case 'keydown':
        switch (e.keyCode) {
          case 37:
            if (lastObject[0].previousSibling === null) break;
            temp = lastObject[1];
            lastObject[1] = lastObject[0].previousSibling.style.backgroundColor;
            lastObject[0].previousSibling.style.backgroundColor = '#009B95';
            lastObject[0].style.backgroundColor = temp;
            lastObject[0] = lastObject[0].previousSibling;
            displayClicked(lastObject[0]);
            break;
          case 38:
            if (lastObject[0].parentElement.previousSibling === null) break;
            
            temp = lastObject[0];
            i = 0;
            while (temp.previousSibling !== null) {
              i++;
              temp = temp.previousSibling;
            }
            temp = lastObject[1];
            lastObject[1] = lastObject[0].parentElement.previousSibling.children[i].style.backgroundColor;
            lastObject[0].parentElement.previousSibling.children[i].style.backgroundColor = '#009B95';
            lastObject[0].style.backgroundColor = temp;
            lastObject[0] = lastObject[0].parentElement.previousSibling.children[i];
            displayClicked(lastObject[0]);
            break;
          case 39:
            if (lastObject[0].nextSibling === null) break;
            temp = lastObject[1];
            lastObject[1] = lastObject[0].nextSibling.style.backgroundColor;
            lastObject[0].nextSibling.style.backgroundColor = '#009B95';
            lastObject[0].style.backgroundColor = temp;
            lastObject[0] = lastObject[0].nextSibling;
            displayClicked(lastObject[0]);
            break;
          case 40:
            if (lastObject[0].parentElement.nextSibling === null) break;
            temp = lastObject[0];
            i = 0;
            while (temp.previousSibling !== null) {
              i++;
              temp = temp.previousSibling;
            }
            temp = lastObject[1];
            lastObject[1] = lastObject[0].parentElement.nextSibling.children[i].style.backgroundColor;
            lastObject[0].parentElement.nextSibling.children[i].style.backgroundColor = '#009B95';
            lastObject[0].style.backgroundColor = temp;
            lastObject[0] = lastObject[0].parentElement.nextSibling.children[i];
            displayClicked(lastObject[0]);
            break;
          default: return;
        }
      default: return;
    }
    document.onkeydown = eventHandler;
  }

  // Построение таблицы
  log.value = "";
  document.body.appendChild(document.createElement('table'));

  while (n--) {
    document.body.lastChild.appendChild(document.createElement('tr'));
    for (i = 0; i < m; i++) {
      newTd = document.createElement('td');
      newTd.innerHTML = generateData(dataInner[0]);
      newTd.style.backgroundColor = generateData(dataInner[1]);
      newTd.addEventListener('click', eventHandler);
      document.body.lastChild.lastChild.appendChild(newTd);
    }
  }
}


createTable (10, 10);
createTable ('chess');
