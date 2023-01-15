function checkCashRegister(price, cash, cid) {
    // currency units for refference
    const currencyUnits = [
        [ 'ONE HUNDRED', 100.00 ],
        [ 'TWENTY', 20.00 ],
        [ 'TEN', 10.00 ],
        [ 'FIVE', 5.00 ],
        [ 'ONE', 1.00 ],
        [ 'QUARTER', 0.25 ],
        [ 'DIME', 0.10 ],
        [ 'NICKEL', 0.05 ],
        [ 'PENNY', 0.01 ]
      ]
      

    let change = (cash-price).toFixed(2);
    let cidSum = (cid.reduce((total,item) => total+=item[1],0.0)).toFixed(2) // e.g. item is ["PENNY", 0.5]
    

    let cidTotalAfter = cidSum - change//).toFixed(2)    // e.g. item is ["PENNY", 0.5]
    //let cidOrdered = cid.sort((a,b) => b[1]-a[1]);
    // make deep copy of 2D array and reverse it
    let cidReversed = [];
    cid.forEach((elem,index) => {
        cidReversed[index]=[...elem];
    })
    
    cidReversed.reverse();
//console.log("cidReversed "+ cidReversed);
    let changeArr=[];
    
    let changeLeftOver = cidReversed.reduce((total,item,index)=> {
        //console.log("into reduce");
        //console.log("change "+total+"  currency used "+currencyUnits[index][0]+"  balance "+item);

        let count = Number(0.00); 
        while (total>=currencyUnits[index][1]&&item[1]>0){ // start removing
            //console.log("into while");

            //console.log("count before "+ count);
            //console.log("change "+total+"  currency used "+currencyUnits[index][0]+"  balance "+item[1]);
            total=(total-currencyUnits[index][1]).toFixed(2);
            item[1]= (item[1]-currencyUnits[index][1]).toFixed(2);
            count= (parseFloat(count)+currencyUnits[index][1]).toFixed(2);
            //count+=1;
            //console.log("count after "+ count);
        }
        if (count>0) changeArr.push([currencyUnits[index][0],Number(count)]);
        
        return total;
    },change); // starting value of 'total' is the 'change' to give
    //return changeLeftOver;
    //console.log("change left over "+changeLeftOver+"\ncidAfter "+cidTotalAfter);
    //console.log("cid "+cid);
    if (changeLeftOver > 0) return {status: "INSUFFICIENT_FUNDS", change: []};
    else if (changeLeftOver==0 && cidTotalAfter==0) return { status: "CLOSED", change: cid };
    else return { status: "OPEN", change: changeArr};
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));