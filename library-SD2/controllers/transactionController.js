let transactions = []; // In-memory storage for transactions

// Create a new transaction (borrow a book)
exports.createTransaction = (req, res) => {
  const { user_id, book_id, borrow_date, return_date } = req.body;
  const newTransaction = {
    id: transactions.length + 1,
    user_id,
    book_id,
    borrow_date,
    return_date
  };
  transactions.push(newTransaction);
  res.status(201).json({ message: 'Transaction created successfully', transaction: newTransaction });
};

// Get all transactions
exports.getAllTransactions = (req, res) => {
  res.status(200).json(transactions);
};

// Get a transaction by ID
exports.getTransactionById = (req, res) => {
  const transaction = transactions.find(t => t.id === parseInt(req.params.id));
  if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
  res.status(200).json(transaction);
};

// Delete a transaction by ID
exports.deleteTransaction = (req, res) => {
  const transactionIndex = transactions.findIndex(t => t.id === parseInt(req.params.id));
  if (transactionIndex === -1) return res.status(404).json({ message: 'Transaction not found' });

  transactions.splice(transactionIndex, 1);
  res.status(200).json({ message: 'Transaction deleted successfully' });
};
