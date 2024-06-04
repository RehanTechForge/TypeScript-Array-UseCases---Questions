var book = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        yearPublished: 1937,
    },
    {
        title: "The Lord of the Rings",
        author: "Geoger",
        yearPublished: 1954,
    },
    {
        title: "The Fellowship of the Ring",
        author: "ALbert",
        yearPublished: 2000,
    },
    {
        title: "The Two Towers",
        author: "J.R.R. Tolkien",
        yearPublished: 2002,
    },
    {
        title: "The Silmarillion",
        author: "J.R.R. Tolkien",
        yearPublished: 1977,
    },
];
var newBook = book.filter(function (book) { return book.yearPublished >= 2000; });
console.log("The Book Greater 2000", newBook);
var authorBook = book.filter(function (book) { return book.author === "J.R.R. Tolkien"; });
console.log("The Book Title match in specific author", authorBook);
