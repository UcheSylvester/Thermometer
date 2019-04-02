console.log('working');

const input = document.querySelector('input');
const fehrenheit = document.querySelector('.fehrenheit');
const kelvin = document.querySelector('.kelvin');


function convert(e) {

	// converting the input to number
	const value = Number(this.value);

	// Rounding fehrenheit degree up to prevent floating point 
	// issues using =====> Math.round((num + 0.00001) * 100) / 100
	const fehDegree = Math.round(((value * 1.8 + 32)+0.00001)*100)/100;
	const kelDegree = Math.round(((value + 273.15)+0.00001)*100)/100;

	// changing the innerHTML to content the converted values
	fehrenheit.innerHTML = `${fehDegree} <em>&degF</em>`
	kelvin.innerHTML = `${kelDegree} <em>K</em>`
}

// Listening for events and refering to the "convert" function
input.addEventListener('change', convert)
input.addEventListener('keyup', convert)
