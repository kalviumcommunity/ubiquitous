
const getUsers = (req, res) => {
  res.status(200).json(users);
};


const createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
};


const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const userIndex = users.findIndex((u) => u.id === parseInt(id));
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  users[userIndex] = { ...users[userIndex], name, email };
  res.json(users[userIndex]);
};

module.exports = { getUsers, createUser, updateUser };
