type Errors = {
    email?: string[];
    firstName?: string[];
    lastName?: string[];
    phone?: string[];
  };
  
  type Form = {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    errors: Errors;
  };
  
  // Реалізуйте Params так, 
  // щоб унеможливити поле 'errors' з типу Form
  type Params = Pick<Form, 'email' | 'firstName' | 'lastName' | 'phone' > ;
  const userMockData: Params = {email:`dummy@mail.com`,firstName:`Evgeniya`,lastName:`Khacko`,phone:`2388238`}
  console.log(userMockData);