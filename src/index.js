module.exports = function check(str, bracketsConfig) {
  let open = ['(', '[', '{', '|', '1', '3', '5', '7', '8'];
  let close = [')', ']', '}', '|','2', '4', '6', '7', '8'];
  let indexOpen;
  let indexClose;
  let stack = [];

  for (let i=0; i<str.length; i++){
    indexOpen = open.indexOf(str[i]);
    if (indexOpen == 3){
      stack.push(indexOpen);
    }
    else if (indexOpen !== -1 && indexOpen !== 3){
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
