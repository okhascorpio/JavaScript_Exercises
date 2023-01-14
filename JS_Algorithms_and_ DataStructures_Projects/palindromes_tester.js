function palindrome(str) {
    const fixedStr = str.toLowerCase().split(/[\_\W]/g).join("");
    console.log(fixedStr);
    return fixedStr.split("").reverse().join("")===fixedStr;
  }
  
  console.log(palindrome("My age is 0, 0 si ega ym."));