function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((count, book) => {
    const [borrow] = book.borrows;
    if (!borrow.returned) {
      return count + 1;
    }
    return count;
  }, 0);
}

function getMostCommonGenres(books) {
  let result = [];
  books.forEach(book => {
  let genreExists = result.find(genre => genre.name === book.genre);
  if(!genreExists) {
    result.push({name: book.genre, count: 1});
  } else {
    genreExists.count += 1;
  }
  });
    result.sort((keyA, keyB) => keyB.count - keyA.count);
    return result.slice(0, 5);
}

function getMostPopularBooks(books) {
  let result = [];
  books.forEach(book => {
    let titleExists = result.find(title => title.name === book.title);
    if(!titleExists) {
      result.push({name: book.title, count: book.borrows.length});
    }
  });
  result.sort((titleA, titleB) => titleB.count - titleA.count);
              return result.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  let popularAuthor = books.filter((book) => authors.find((author) => author.id === book.authorId));
  popularAuthor.forEach(book => {
    let author = authors.find((author) => author.id === book.authorId);
    result.push({name: `${author.name.first} ${author.name.last}`, count: book.borrows.length})
  })
  result.sort((authorA, authorB) => authorB.count - authorA.count);
  return result.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
