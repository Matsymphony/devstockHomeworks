//Zad 2.

// const library = {
//   name: "DevLibrary",
//   books: [],
// };

// const book1 = {
//   title: "Pan Tadeusz",
//   author: "Adam Mickiewicz",
//   yearOfPublication: 1834,
// };

// const book2 = {
//   title: "Mistrz Twardowski",
//   author: "Józef Ignacy Kraszewski",
//   yearOfPublication: 1840,
// };

// const book3 = {
//   title: "Pan Kleks",
//   author: "Jan Brzechwa",
//   yearOfPublication: 1946,
// };

// let oldestBook;

// library.books.push(book1, book2, book3);

// const title1 = library.books[0].title;
// const author1 = library.books[0].author;
// const yearOfPublication1 = library.books[0].yearOfPublication;

// const title2 = library.books[1].title;
// const author2 = library.books[1].author;
// const yearOfPublication2 = library.books[1].yearOfPublication;

// const title3 = library.books[2].title;
// const author3 = library.books[2].author;
// const yearOfPublication3 = library.books[2].yearOfPublication;

// const bookInfo1 = `Tytuł:${title1}, Autor:${author1}, Rok wydania:${yearOfPublication1}.`;
// const bookInfo2 = `Tytuł:${title2}, Autor:${author2}, Rok wydania:${yearOfPublication2}.`;
// const bookInfo3 = `Tytuł:${title3}, Autor:${author3}, Rok wydania:${yearOfPublication3}.`;

// if (
//   yearOfPublication1 < yearOfPublication2 &&
//   yearOfPublication1 < yearOfPublication3
// ) {
//   oldestBook = title1;
// } else if (
//   yearOfPublication2 < yearOfPublication1 &&
//   yearOfPublication2 < yearOfPublication3
// ) {
//   oldestBook = title2;
// } else {
//   oldestBook = title3;
// }

// const libraryInfo = `Biblioteka ${library.name}
// zawiera książki: ${title1}, ${title2}, ${title3}.
// Najstarsza książka: ${oldestBook}.`;

// console.log(libraryInfo);
