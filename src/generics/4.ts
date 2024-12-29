
type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  }
  
  function createOrUpdateUser(initialValues: Partial<User>) {
    // Оновлення користувача
    console.log('Updated user:', initialValues);
  }
 
  createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
  });