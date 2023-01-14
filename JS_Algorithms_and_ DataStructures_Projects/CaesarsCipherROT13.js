function rot13(str) {
    const rot13 = {"N": "A", "O": "B", "P": "C", "Q": "D", "R":"E", "S":"F", "T":"G", "U":"H", "V":"I", "W":"J", "X":"K", "Y":"L", "Z":"M", "A":"N", "B":"O", "C":"P", "D":"Q", "E":"R", "F":"S", "G":"T", "H":"U", "I":"V", "J":"W", "K":"X", "L":"Y", "M":"Z"}
    //const strArr= str.split("");
    let decipherArr = str.split("");
    for (let index in str) {
        for(let rot in rot13) {
            if(rot===str[index]) decipherArr[index] = rot13[rot] 
        }
    }
    return decipherArr.join("");
  }
  
  console.log(rot13("SER! R#"));