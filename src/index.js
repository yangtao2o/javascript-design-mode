var Book = function(title, time, type) {
  console.log(this instanceof Book)
  if(this instanceof Book) {
    this.title = title;
    this.time = time;
    this.type = type;
  } else {
    return new Book(title, time, type);
  }
}

var book = Book('JS', 2019, 'js');
console.log(book.time)  // 2019