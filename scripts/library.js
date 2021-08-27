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

let library = [['book', 'joe', '42'], ['otherbook', 'mama', '19']];

function addToLibrary(){
  
}

function displayBooks(){
  let bookTable = document.getElementById('tableText');
  if(library.length == 0){
    bookTable.appendChild(document.createTextNode('EMPTY'));
  }
  else{
    library.forEach((book, index) =>{
      let row = document.getElementById('bookTable').insertRow(index);
      book.forEach((data, bookIndex) =>{
        row.insertCell(bookIndex).innerHTML = data;
      });
    });
  }
}