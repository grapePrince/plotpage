
export default class Util {
	static randomElementsFromArr(arr, num, duplicate) {
		let i, results=[];
		for (i=0; i<num ; i++) {
			let rand = Math.floor(Math.random()*arr.length);
			if (duplicate) {
				results[i] = arr[rand];
			} else {
				results[i] = arr.splice(rand, 1)[0];
			}
		} 
		return results;
	};
}
