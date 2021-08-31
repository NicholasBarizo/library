function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    if(read){
      return `${title} by ${author} with ${pages} has been read`;
    }
    else{
      return `${title} by ${author} with ${pages} has not been read`;
    }
  }
}

let library = [['Book1', 'Author1', '42', 'read'], ['Book2', 'Author2', '19', 'unread']];

function addToLibrary(){
  let form = document.getElementById("addBook");
  addRow([form.elements[0].value, form.elements[1].value, form.elements[2].value, form.elements[3].checked]);
  console.log(document.getElementsByClassName('libraryInput'))
  document.getElementById('book').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
}

function displayBooks(){
  let bookTable = document.getElementById('tableText');
  if(library.length == 0){
    bookTable.appendChild(document.createTextNode('EMPTY'));
  }
  else{
    let bookTable = document.getElementById('bookTable');
    let fieldNameRow = bookTable.insertRow(0);
    fieldNameRow.classList.add('tableFieldName')
    fieldNameRow.insertCell(0).appendChild(document.createTextNode('Book Title'));
    fieldNameRow.insertCell(1).appendChild(document.createTextNode('Author'));
    fieldNameRow.insertCell(2).appendChild(document.createTextNode('Pages'));
    fieldNameRow.insertCell(3).appendChild(document.createTextNode('Status'));
    library.forEach((book) =>{
      addRow(book)
    });
  }
}

function addRow(book){
  let bookTable = document.getElementById('bookTable');
  rowCount = bookTable.rows.length;
  let row = bookTable.insertRow(rowCount);
  for(i = 0; i<=3; i++){
    if(i == 3){
      if(book[i] == false){
        row.insertCell(i).innerHTML = 'Unread'
      }
      else{
        row.insertCell(i).innerHTML = 'Read'
      }
    }
    else if(book[i] === ''){
      row.insertCell(i).innerHTML = '?';
    }
    else{
      row.insertCell(i).innerHTML = book[i] ;
    }
  }
}

displayBooks();