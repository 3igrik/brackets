module.exports = function check(str, bracketsConfig) {
  str = str.split('');

  const openBrackets = [];
  const closeBrackets = [];
  const stack = [];

  bracketsConfig.forEach(element => {
    openBrackets.push(element[0]);
    closeBrackets.push(element[1]);
  });

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < openBrackets.length; j++){
      if (openBrackets[j] == closeBrackets[j] && str[i] == closeBrackets[j]) {
        if (str[i] == closeBrackets[stack[stack.length - 1]]) { 
          stack.pop(j);
        } else {
          stack.push(j);
        }
      } else if (str[i] == openBrackets[j]) { 
        stack.push(j);
      } else if (str[i] == closeBrackets[j]) {
        if (j == stack[stack.length - 1]) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return stack.length == 0;
}
