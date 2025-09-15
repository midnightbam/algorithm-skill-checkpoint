function sortProductsByPrice(products) {
  // Your code here
  const n = products.length;
  const arr = [...products];
  for(let i = 0; i < n -1; i++) {
    for(let j = 0; j < n - i -1; j++) {
      if(arr[j].price > arr[j + 1].price) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
}
  return arr;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
