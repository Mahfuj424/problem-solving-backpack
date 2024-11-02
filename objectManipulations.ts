type Book = {
  title: string;
  author: string;
  year: number;
};

const books: Book[] = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
];

function getBookTitles(booksArray: Book[]): string[] {
  return booksArray.map((book) => book.title);
}

console.log(getBookTitles(books));
