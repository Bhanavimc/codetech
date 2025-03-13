# Library API

This is a simple RESTful API for managing a library/inventory system. It supports CRUD operations for books, users, and transactions.

## Endpoints

### Books
- `POST /api/v1/books` - Create a new book
- `GET /api/v1/books` - Get all books
- `GET /api/v1/books/:id` - Get a single book by ID
- `PUT /api/v1/books/:id` - Update a book by ID
- `DELETE /api/v1/books/:id` - Delete a book by ID

### Users
- `POST /api/v1/users` - Create a new user
- `GET /api/v1/users` - Get all users
- `GET /api/v1/users/:id` - Get a single user by ID
- `PUT /api/v1/users/:id` - Update a user by ID
- `DELETE /api/v1/users/:id` - Delete a user by ID

### Transactions
- `POST /api/v1/transactions` - Create a new transaction (borrow a book)
- `GET /api/v1/transactions` - Get all transactions
- `GET /api/v1/transactions/:id` - Get a single transaction by ID
- `DELETE /api/v1/transactions/:id` - Delete a transaction by ID

## Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the API.

## License
MIT
