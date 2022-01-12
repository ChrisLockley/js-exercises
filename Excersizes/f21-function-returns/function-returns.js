function ConvertDegreesFToC(degreesF)
{
	const degreesC = (degreesF - 32) * (5/9);

	// 2) We need to give back the Celsius degrees to whomever
	//      invoked the function, not just calculate them
	//      (i.e. use a return keyword)
	return degreesC;
}

let temperatureInF = 76;
let temperatureInC = ConvertDegreesFToC(temperatureInF);

// 1) We need to invoke our conversion function with the
//      76-degrees Fahrenheit variable and store the
//      given-back degrees into "temperatureInC";
//      so that "console.log" prints correctly

console.log(temperatureInF + " degrees Fahrenheit equates to " 
+ temperatureInC + " degrees in Celsius.");