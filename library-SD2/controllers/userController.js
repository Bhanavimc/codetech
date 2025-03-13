let users = []; // In-memory storage for users

// Create a new user
exports.createUser = (req, res) => {
  const { name, email, membership_date } = req.body;
  const newUser = { id: users.length + 1, name, email, membership_date };
  users.push(newUser);
  res.status(201).json({ message: 'User created successfully', user: newUser });
};

// Get all users
exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
};

// Get a user by ID
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.status(200).json(user);
};

// Update a user by ID
exports.updateUser = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  const { name, email } = req.body;
  user.name = name || user.name;
  user.email = email || user.email;

  res.status(200).json({ message: 'User updated successfully', user });
};

// Delete a user by ID
exports.deleteUser = (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  users.splice(userIndex, 1);
  res.status(200).json({ message: 'User deleted successfully' });
};
