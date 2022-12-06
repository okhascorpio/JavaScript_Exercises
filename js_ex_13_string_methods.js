let text1 = "Hello";
let text2 = "   World";
let text3 = text1.concat(text2)+'World';
console.log("The length of 'Hello' is = "+text1.length);
console.log('Length of Text2 before Trim() = '+text2.length+', Length of Text2 after Trim() = '+text2.trim().length);
console.log("Concatinate text1 and text2 = "+text1.concat(text2));
console.log("Slice(0,4) of 'Hello' = "+text1.slice(0,4));
console.log("Slice(-2) of 'Hello' = "+text1.slice(-2));
console.log("Replace all 'World' with 'Javascript' case insensitive ' = "+text3.replace(/world/ig,'Javascript'));
console.log("Replaceall('World','Java') = "+text3.replaceAll('World','Java'));


/*
More Methods
JavaScript Search Methods
String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()
*/


let text="The earliest known form of Latin is Old Latin, which was spoken from the Roman Kingdom to the later part of the Roman Republic period. It is attested both in inscriptions and in some of the earliest extant Latin literary works, such as the comedies of Plautus and Terence.";
console.log("index of 'the' after 70 : "+text.indexOf('the',70));
console.log("search 'the' case insensitive: "+text.search(/the/i));
console.log("match() returns an array of matching string:\nCan be global /g and case insensitive /i "+text.match(/the/ig));

const iterator = text.matchAll(/the/ig);
console.log("matchAll() returns iterator: "+Array.from(iterator));

