function findAuthorById(authors, id) {
  const found = authors.find((author) => author.id ===id);
  return found;
}

function findBookById(books, id) {
  const found = books.find((book) => book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOut = books.filter((book) => book.borrows[0].returned === false);
  const returnedBooks = books.filter((book) => book.borrows[0].returned === true);
  return [checkedOut, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  let borrowX = book.borrows.map((book) => {
    let accountX = findAuthorById(accounts, book.id);
    accountX.returned = book.returned;
    return accountX;
  }).slice(0,10);
  return borrowX;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
