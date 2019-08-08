function pendulum(values) {
	function compareNumeric(a, b) {
		return a - b;
	}
    let arr = Array.from(values).sort(compareNumeric);
    let pendulumArr = [];
    arr.forEach((value,i)=>{
    	i%2==0 ? pendulumArr.unshift(value) : pendulumArr.push(value)
    })
    return pendulumArr
}
pendulum([4,10,9])