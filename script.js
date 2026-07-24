const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let brr = [];
	for(let i = 0; i < arr.length; i++) {
		for(let j = i; j < arr.length; j++) {
			let a = arr.slice(i, j+1);
			let sum = 0;
			for(let k = 0; k < a.length; k++) {
				sum += a[k];
			}
			if(sum <= n) {
				brr.push(a);
			}
		}
	}
	return brr;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
