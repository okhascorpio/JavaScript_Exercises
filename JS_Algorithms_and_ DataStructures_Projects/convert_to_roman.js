function convertToRoman(num) {
    const baseRomanDecimal = 
       {"M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100, "XC": 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    let testDecimal = num;
    let romanOut =   "";
    for (let roman in baseRomanDecimal){
        while (testDecimal >= baseRomanDecimal[roman]) {
            //console.log("test "+test+"\nRoman: "+roman);
            romanOut+=roman;
            testDecimal-=baseRomanDecimal[roman];
        }
    }
    return romanOut;
   }
   
   console.log("Roman: "+convertToRoman(2006));