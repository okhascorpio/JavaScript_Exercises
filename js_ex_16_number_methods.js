/*
toString()	    Returns a number as a string
toExponetial()	Returns a number written in exponential notation
toFixed()	    Returns a number written with a number of decimals
toPrecision()	Returns a number written with a specified length
ValueOf()	    Returns a number as a number


Number()        Converts js variables to numbers, and gives NaN for alphabets.
                On dates give milli seconds since 1.1.1970 till the given date.
parseInt()      Returns a whole number when a numeric string is given.
parseFloat()    Parses its argument and returns a floating point number



Number Object Methods
Number.isInteger()	    Returns true if the argument is an integer
Number.isSafeInteger()	Returns true if the argument is a safe integer
Number.parseFloat() 	Converts a string to a number
Number.parseInt()	    Converts a string to a whole number


*/

        var x = 123;
        console.log(x+" toString() "+"\n"+
            x.toString()+"\n"+
            (123).toString() + "\n" +
            (100 + 23).toString() + "\n");

        var x = 7.5864;
        console.log(x+" toExponential() " +
            x.toExponential() + "\n" +
            x.toExponential(2) + "\n" +
            x.toExponential(4) + "\n" +
            x.toExponential(6) + "\n");

        var x = 9.656;
        console.log(x+" toFixed()\n" +
            x.toFixed(0) + "\n" +
            x.toFixed(2) + "\n" +
            x.toFixed(4) + "\n" +
            x.toFixed(6)+ "\n");

        var x = 9.656;
        console.log(x+" toPrecision()\n" +
            x.toPrecision() + "\n" +
            x.toPrecision(2) + "\n" +
            x.toPrecision(4) + "\n" +
            x.toPrecision(6) + "\n");


            
        x = Number("22");
        console.log(x+" valueOf()\n" +
            x.valueOf() + "\n" +
            ("123").valueOf() + "\n" +
            (100 + 23).valueOf() + "\n");

        console.log("\nNumber()\n" +
            Number(true) + "\n" +
            Number(" 10  ") + "\n" +
            Number("10.33") + "\n" +
            Number("10,33") + "\n" +
            Number("10 33") + "\n" +
            Number("John") + "\n");

        var x = new Date("1970-01-01");
        console.log("\nmseconds until 1.1.1970: " + Number(x));
        console.log("\nmseconds until 1.2.1970: " + Number(new Date("1970-02-01")));

        console.log("\n\nparseInt()\n" +
            parseInt("-10.33") + "\n" +
            parseInt("10.33") + "\n" +
            parseInt("10 6") + "\n" +
            parseInt("10 years") + "\n" +
            parseInt("years 10") + "\n");

        console.log("\nparseFloat()\n" +
            parseFloat("10.33") + "\n" +
            parseFloat("10 6") + "\n" +
            parseFloat("10 years") + "\n" +
            parseFloat("years 10"));



        console.log("\n\nNumber.isInteger('10'): " + Number.isInteger(10) +"\n"+ 
            "Number.isInteger('10.5'): " + Number.isInteger(10.5) + "\n" +
            "Number.isSafeInteger(1000): " + Number.isSafeInteger(1000) + "\n" +
            "Number.isSafeInteger(1e16): " + Number.isSafeInteger(1e16) + "\n" +
            "Number.parseFloat(): " + Number.parseFloat("10.33") + "\n" +
            "Number.parseInt(): " +   Number.parseInt("-10.33"));
