/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars
{
  'use strict';

  const select = {
    templateOf: {
      books: '#template-book' 
    },
    list: {
      booksList: '.books-list',
      booksImage: '.book__image'
    }
  };

  const template = {
    books: Handlebars.compile(document.querySelector(select.templateOf.books).innerHTML),
  };    
    
  function render(){

    const booksList = document.querySelector(select.list.booksList);  

    for(let book of dataSource.books){
      const generateHTML = template.books(book);
      const generateDOM = utils.createDOMFromHTML(generateHTML);
      booksList.appendChild(generateDOM);
    }
            
  }
  render();
    
  

  function initAction(){
    
    const favoriteBooks = [];

    const booksList = document.querySelector(select.list.booksImage);
    booksList.addEventListener('dblclick', function(event){
      event.preventDefault();
      
      booksList.classList.add('favorite');
      
    });
  }
}
