const { render } = require("sass");

/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars
{
//     'use strict';
    // const select = {
    //     templateOf: {
    //     booksTemplate: '#template-book' 
    //     }
    // };

    const template = {
        books: Handlebars.compile(document.querySelector(select.templateOf.books).innerHTML),
    };    
    // eslint-disable-line no-unused-vars
    
        render()
            const thisbooksList = this;

            for(let book of dataSource.books){
                const generateHTML = template.booksTemplate(book);
                const generateDOM = utils.createDOMFromHTML(generateHTML);
                booksList.appendChild(generateDOM);
            }
        }
    
} 

