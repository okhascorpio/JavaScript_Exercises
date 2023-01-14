function telephoneCheck(str) {
    const regex = /^\d{10}$|((^\d{3}|^\(\d{3}\)|^1\d{3}|^1\(\d{3}\)|^1\s\d{3}|^1\s\(\d{3}\))((-|\s)?\d{3}(-|\s)?\d{4}$))/;
    //const regex =/^(1\(\d{3}\))/;
    return regex.test(str);
  } 
  
  console.log(telephoneCheck("(555)555-5555"));