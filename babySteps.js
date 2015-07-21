var nums = process.argv.slice(2);

var ans = 0;

for (var i = 0; i < nums.length; i++) {
	ans += Number(nums[i]);
}

console.log(ans);