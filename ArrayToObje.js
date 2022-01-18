let arr1 = [
  ["id", "1"],
  ["name", "Test User"],
  ["age", "25"],
  ["profession", "Developer"],
];

console.log(Object.assign({}, arr));

console.log({ ...arr });

console.log(Object.fromEntries(arr1));
