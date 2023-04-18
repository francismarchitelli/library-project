function findAccountById(accounts, id) {
  const found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  const sortByLastName = accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  return sortByLastName;
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  const accountId = account.id;
  for(let i = 0; i <books.length; i++) {
    const borrows = books[i].borrows;
    for (let j = 0; j < borrows.length; j++) {
      if(borrows[j].id === accountId) {
        total += 1;
      }
    }
  }
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  const result = books.filter((book) => {
    const borrows = book.borrows;
    const recentBorrow = borrows[0];
    return !recentBorrow.returned && recentBorrow.id === accountId;
  }).map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    return { ...book, author };
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
