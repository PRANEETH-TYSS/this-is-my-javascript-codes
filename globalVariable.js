function foo() {
  let a = (b = 0);
  a++;
  return a;
}
foo();
typeof a;
typeof b;
