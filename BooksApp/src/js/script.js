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
    },
    products: {
      name: '.book_name',
      price: 'product__base-price',
      bookImg: 'book__image',
      filters: '.filters',
    }
  };

  const template = {
    books: Handlebars.compile(document.querySelector(select.templateOf.books).innerHTML),
  };

  class BookList { 

    constructor(){
      const thisBookList = this;

      thisBookList.initData();
      thisBookList.getElements();
      thisBookList.render();
      thisBookList.initAction();
    }

    initData() {
      this.data = dataSource.books;
      this.favoriteBooks = [];
      this.titleFilters = [];
    }
  

    getElements(){
      const thisBookList = this;
      

      thisBookList.dom = {};

      thisBookList.dom.booksList = document.querySelector(select.list.booksList);
      thisBookList.dom.booksImg = document.querySelector(select.list.booksImage);
      thisBookList.dom.bookFilter = document.querySelector(select.products.filters);
    }

    render(){
      const thisBookList = this;

      for(let book of dataSource.books){

        
        const ratingBgc = thisBookList.determineRatingBgc(book.rating);
        book.ratingBgc = ratingBgc;
        const ratingWidth = book.rating * 10;
        book.ratingWidth = ratingWidth;

        const generateHTML = template.books(book);
        const generateDOM = utils.createDOMFromHTML(generateHTML);
        const booksList = document.querySelector(select.list.booksList);
        booksList.appendChild(generateDOM);
      }
      console.log('render', thisBookList);   
    }
    
    initAction(){
      const thisBookList = this;

      
      thisBookList.dom.booksList.addEventListener('click', function(event){
        event.preventDefault();

        const clickedBook = event.target.offsetParent;

        if(clickedBook.classList.contains('favorite')) {
          clickedBook.classList.remove('favorite');
          thisBookList.favoriteBooks.splice(clickedBook, 1);
        } 
        else {
          clickedBook.classList.add('favorite');
          thisBookList.favoriteBooks.push(clickedBook);
        }
        console.log('click', clickedBook);
      });
      console.log('flip', thisBookList);
    
      thisBookList.dom.bookFilter.addEventListener('click', function(event){
        const clickedBook = event.target;
    
        if(clickedBook.tagName == 'INPUT' && clickedBook.type == 'checkbox' && clickedBook.name == 'filter'){
            
          if(clickedBook.checked){
            thisBookList.titleFilters.push(clickedBook.value);
          } 
          else {
            const filterRemove = thisBookList.titleFilters.indexOf(clickedBook.value);
            thisBookList.titleFilters.splice(filterRemove, 1);
          }
        }
        console.log('cliedfilterd', clickedBook.value);
        thisBookList.filterBooks();
      });
    } 

    filterBooks(){
      const thisBookList = this;

      for(let book of dataSource.books){
        let shouldBeHidden = false;
    
        const filteredBook = document.querySelector('.book__image[data-id="' + book.id + '"]');
    
        for(const filter of thisBookList.titleFilters){
          if(!book.details[filter]){
            shouldBeHidden = true;
            break;
          }
        }
    
        if(shouldBeHidden === true){
          filteredBook.classList.add('hidden');
        } else{
          filteredBook.classList.remove('hidden');
        }
        console.log('filteredBook', filteredBook);
      }
    }
  
    determineRatingBgc(rating) {
      let background = '';
      if(rating < 6){
        background = 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%)';
      }else if(rating > 6 && rating <= 8){
        background = 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)';
      }else if(rating > 8 && rating <= 9){
        background = 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)';
      }else if(rating > 9){
        background = 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)';
      }
      return background;
    }
  }

  new BookList();
}
