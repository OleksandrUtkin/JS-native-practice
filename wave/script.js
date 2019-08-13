function wave() {
	let arr = String(Array.from(arguments)).split('');
	let wave = [];
	for (let i=0; i<String(Array.from(arguments)).length; i++) {
		wave.push(String(Array.from(arguments)).split(''))
	}
	let count = 0;
	while(count<String(Array.from(arguments)).length){
		wave[count].splice(count,1,arr[count].toUpperCase())
		count++
	}
	return wave.map(x=>x.join('')).join(' ')
}
console.log(wave("word"))