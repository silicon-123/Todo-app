const users = [
    { username: 'user1', password: 'password1', todos: [] },
  ];
  
  export const authenticateUser = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    return user ? { ...user } : null;
  };
  
  export const registerUser = (username, password) => {
    if (users.some((u) => u.username === username)) {
      return null; // Username already exists
    }
    const newUser = { username, password, todos: [] };
    users.push(newUser);
    return newUser;
  };
  