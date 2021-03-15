module.exports = function check(str, bracketsConfig) {
  let open = ['(', '[', '{', '|'];
  let close = [')', ']', '}', '|'];
  let indexOpen;
  let indexClose;
  let stack = [];

  for (let i=0; i<str.length; i++){
    indexOpen = open.indexOf(str[i]);
    if (indexOpen !== -1){
      stack.push(indexOpen);
      continue;
    }
    indexClose = close.indexOf(str[i]);
    if (indexClose !== -1){
      indexOpen = stack.pop();
      if (indexClose !== indexOpen){
        return false;
      }
    }
  }
    if (stack.length !== 0){
      return false;
    }
  return true;
}
