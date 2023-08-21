function updateObject(originalObject, propertiesToUpdate) {
    return { ...originalObject, ...propertiesToUpdate };
  }
  
  const person = { name: 'Alice', age: 30 };
  const updatedPerson = updateObject(person, { age: 31, city: 'New York' });

  export { updateObject, person, updatedPerson };