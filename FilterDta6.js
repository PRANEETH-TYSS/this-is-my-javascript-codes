//  To filter Data greater thsn 6 letter
let arr = ["chandrakala", "Bala", "booblur", "karthick", "kingkong"];

let filtered = arr.filter((value, index) => {
  if (value.length > 5) {
    return value;
  }
});
console.log(filtered);
