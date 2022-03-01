let count = 0;
const nums = [0, 1, 2, 3];

for(var i in nums){
	if (i) 
    {
        console.log(i)
        count += 1
    }
}
console.log(count)