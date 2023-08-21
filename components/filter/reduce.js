const items = [
    { name: "Apple", price: 1 },
    { name: "Banana", price: 0.5 },
    { name: "Cherry", price: 2 },
    { name: "Date", price: 1.5 }
  ];
  
  function calculateTotalPrice(items) {
    const totalPrice = items
      .filter(item => item.price > 1)
      .reduce((total, item) => total + item.price, 0);
    return totalPrice;
  }
  
export { calculateTotalPrice, items };
  