console.log("Object Creation");
const books = {
    title: "JavaScript",
    author: "searchitongoogle",
    year: 1999,
};
console.log(books);
console.log(books.author);
console.log(books.title);

console.log("Object Method ");
books.getInfo = function () {
    return `${books.title} by${books.author}`;
};
console.log(books.getInfo());
books.updateYear = function (year) {
    books.year = year;
};
books.updateYear(2023);
console.log(books);

console.log("Nested Objects");
const library = {
    name: "City Library",
    books: [
        { title: "title1", author: "author1", year: 1945 },
        { title: "title2", author: "author3", year: 1946 },
        { title: "title3", author: "author3", year: 1947 },
        { title: "title4", author: "author4", year: 1948 },
    ],
};
console.log(library)
library.Info=function(){
    console.log('Library Name: '+library.name)
    library.books.forEach((books)=>(console.log("Title: "+books.title)))
}
library.Info()


console.log("========>this Keyword")
books.getthisinfo=function(){
    return `${this.title} by ${this.author}`
}
console.log(books.getthisinfo())


console.log("Object Iteration")
for(k in books){
    console.log(`${k} : ${books[k]}`)
}
