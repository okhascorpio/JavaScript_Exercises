let i = 20;
let j = 20.04;    
let k = 123e5;
let l = 123e-5;
let m = 9999999999999999; 
let n = 0.1 + 0.2;
let o = (0.1 * 10 + 0.2 * 10) / 10;
let p = "Hello";
// myNumber.toString(32);
console.log("a Number Can be decimal: "+i+"\n"+
"or can be float: "+j+"\n"+
"or can be exponential: "+k+" or "+l+"\n"+
"above accuracy limit are rounded off: "+m+"\n"+
"float calc is not accurate (0.2 + 0.1): "+n+"\n"+
"instead try * and / (0.2 * 10 + 0.1 * 10)/10: "+o+"\n"+
"* or / by non number results in NaN i.e not a number: "+(i*p)+"\n"+
"toString() can change the base of a number:i=20; i.toString(32) = "+i.toString(32)+"\n\n");


//Big Integer

let x = 123456789012345678901234567890;
let y = 123456789012345678901234567890n;
let z = BigInt("123456789012345678901234567890");
console.log("BigInt for larger precise numbers:\n\n"+x + "\n" + y + "\n" + z);

