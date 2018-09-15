module.exports = function solveEquation(equation) {
  // your implementation
	let enterParams = equation.split(' ');
	let params = [];
	
	enterParams.forEach(item => {
		params.push(item);
	});
	
	/* add all pameters if a == 1 */
	if (enterParams.length < 9) {
		params.unshift('*');
		params.unshift('1');
	}
	
	
	let a = +params[0];
	let b = +params[4];
	let c = +params[8];
	
	if (params[3] === '-') {
		b = -b;
	}
	if (params[7] === '-') {
		c = -c;
	}
	
	let discriminant = Math.pow(b, 2) - (4 * a * c);
	
	let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
	let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
	
	let resultArr = [];
	resultArr.push(Math.round(x1));
	resultArr.push(Math.round(x2));
	
	resultArr.sort((a, b) => {
		return a - b;
	});
	
	return resultArr;
	
}
