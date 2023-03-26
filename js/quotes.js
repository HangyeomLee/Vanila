const quotes = [
    {
        quote: "",
        author: "",
    },{
        quote: "",
        author: "",
    },{
        quote: "",
        author: "",
    },{
        quote: "",
        author: "",
    },{
        quote: "",
        author: "",
    },{
        quote: "",
        author: "",
    },{
        quote: "",
        author: "",
    },{
        quote: "",
        author: "",
    },{
        quote: "",
        author: "",
    },{
        quote: "",
        author: "",
    }
];

let Random_Number = Math.floor(Math.random() * quotes.length)

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Random_Number];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;