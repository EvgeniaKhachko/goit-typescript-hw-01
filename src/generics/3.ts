
  function merge<T, U>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
  }
  
  const obj1 = { name: 'Alice' };
  const obj2 = { age: 25 };
  
  const mergedObject = merge(obj1, obj2);
  console.log(mergedObject);
