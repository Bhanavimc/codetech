let books = []; // In-memory storage for books

// Create a new book
exports.createBook = (req, res) => {
  const { title, author, genre, published_date, quantity } = req.body;
  const newBook = { id: books.length + 1, title, author, genre, published_date, quantity };
  books.push(newBook);
  res.status(201).json({ message: 'Book created successfully', book: newBook });
};

// Get all books
exports.getAllBooks = (req, res) => {
  res.status(200).json(books);
};

// Get a book by ID
exports.getBookById = (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.status(200).json(book);
};

// Update a book by ID
exports.updateBook = (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const { title, author, genre, published_date, quantity } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;
  book.genre = genre || book.genre;
  book.published_date = published_date || book.published_date;
  book.quantity = quantity || book.quantity;

  res.status(200).json({ message: 'Book updated successfully', book });
};

// Delete a book by ID
exports.deleteBook = (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex === -1) return res.status(404).json({ message: 'Book not found' });

  books.splice(bookIndex, 1);
  res.status(200).json({ message: 'Book deleted successfully' });
};
