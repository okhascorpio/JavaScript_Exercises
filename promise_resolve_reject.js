const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer=true;
      
    if(responseFromServer) {
      // Change this line
      resolve("We got the data");
    } else {  
      // Change this line
      reject("Data not received");
    }
  });

    // handle resolve with then and result
    makeServerRequest.then( result => {
      console.log(result);
    }).catch( error => {
      console.log(error);
    });

  // handle reject with catch and error 
  /*makeServerRequest.catch( error => {
    console.log(error);
  });*/


