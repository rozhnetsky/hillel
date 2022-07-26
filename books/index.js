const booksGrid = document.getElementById("books-grid");
const books = [
    {
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        path: 'images/don_quixote'
    },
    {
        title: 'Lord of&nbsp;the&nbsp;Rings',
        author: 'J.R.R. Tolkien',
        path: 'images/lord_of_the_rings'
    },
    {
        title: 'Harry Potter and the&nbsp;Sorcerer\'s&nbsp;Stone',
        author: 'J.K. Rowling',
        path: 'images/harry_potter'
    },
    {
        title: 'Alice\'s Adventures in&nbsp;Wonderland',
        author: 'Lewis Carroll',
        path: 'images/alice_adventures_in_wonderland'
    },
    {
        title: 'Twenty Thousand Leagues Under&nbsp;the&nbsp;Sea',
        author: 'Jules Verne',
        path: 'images/twenty_thousand_leagues_under_the_sea'
    },
    {
        title: 'Moby Dick',
        author: 'Herman Melville',
        path: 'images/moby_dick'
    },
    {
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        path: 'images/the_picture_of_dorian_gray'
    }
]

for(let book of books) {
  console.log(book.title)
  console.log(book.author)
  console.log(book.path)
  booksGrid.innerHTML += `
    <div class="book">
      <div class="book__cover">
        <img src="${book.path}.jpeg" alt="${book.title}" /> 
      </div>
       <div class="book__description">
          <div class="book__title">${book.title}</div>
          <div class="book__author">${book.author}</div>
      </div>
      <div class="book__bg">
        <img src="${book.path}.jpeg" alt="${book.title}" /> 
      </div>
    </div>
  `
}