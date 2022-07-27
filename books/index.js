const booksGrid = document.getElementById("books-grid");
const books = [
    {
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        path: 'images/don_quixote',
        bestseller: false,
        props: {
            stars: 4,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla elementum lacus, pretium condimentum lectus aliquam ut."
        }
    },
    {
        title: 'Lord of&nbsp;the&nbsp;Rings',
        author: 'J.R.R. Tolkien',
        path: 'images/lord_of_the_rings',
        bestseller: true,
        props: {
            stars: 5,
            description: "Quisque lorem risus, porttitor vitae suscipit consectetur, tempus ut sem."
        }
    },
    {
        title: 'Harry Potter and the&nbsp;Sorcerer\'s&nbsp;Stone',
        author: 'J.K. Rowling',
        path: 'images/harry_potter',
        bestseller: false,
        props: {
            stars: 3,
            description: "Duis ac metus pulvinar, mattis arcu in, bibendum enim. Etiam nec odio mauris."
        }
    },
    {
        title: 'Alice\'s Adventures in&nbsp;Wonderland',
        author: 'Lewis Carroll',
        path: 'images/alice_adventures_in_wonderland',
        bestseller: false,
        props: {
            stars: 5,
            description: "Nunc venenatis enim odio, eget pharetra turpis mattis ac. Donec mattis, nunc non pretium malesuada, eros velit lobortis felis, sed luctus massa quam et nulla. Integer et sagittis lorem."
        }
    },
    {
        title: 'Twenty Thousand Leagues Under&nbsp;the&nbsp;Sea',
        author: 'Jules Verne',
        path: 'images/twenty_thousand_leagues_under_the_sea',
        bestseller: true,
        props: {
            stars: 5,
            description: "Fusce justo metus, malesuada eu mi quis, dignissim porttitor enim."
        }
    },
    {
        title: 'Moby Dick',
        author: 'Herman Melville',
        path: 'images/moby_dick',
        bestseller: true,
        props: {
            stars: 4,
            description: "Sed blandit felis nec quam suscipit, eu vehicula ex commodo."
        }
    },
    {
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        path: 'images/the_picture_of_dorian_gray',
        bestseller: false,
        props: {
            stars: 5,
            description: "Praesent blandit orci ac est molestie, vel accumsan turpis sollicitudin. Fusce a dolor tempor, dignissim purus a, volutpat velit."
        }
    }
]

for(let book of books) {
  let {title, author, path, bestseller, props} = book;
  let {stars, description} = props;
  let bookClass = bestseller ? "book book--bestseller" : "book";
  let starsRating = () => {
    let html = "";
    for(let i = 0; i < stars; i++) {
        html += `
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Five_Pointed_Star_Solid.svg/2175px-Five_Pointed_Star_Solid.svg.png" alt="star" />
        `
    }
    return html;
  }

  booksGrid.innerHTML += `
    <div class="${bookClass}">
      <div class="book__cover">
        <img src="${path}.jpeg" alt="${title}" /> 
      </div>
       <div class="book__section">
          <div class="book__title">${title}</div>
          <div class="book__author">${author}</div>
          <span class="book__stars" stars="${stars}">
            ${starsRating()}
          </span>
          <div class="book__description">${description}</div>
      </div>
      <div class="book__bg">
        <img src="${path}.jpeg"  alt=""/> 
      </div>
    </div>
  `
}