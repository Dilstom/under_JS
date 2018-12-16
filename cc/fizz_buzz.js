// Print	out	all	the	numbers	from	1	to	100.	But	for	every	number	divisible	
// by	3	print	replace it	with	the	
// word	“Fizz,”	for	any	number	divisible	by	5	replace	it	with	the	word	
// “Buzz”	and	for	a	number	divisible	
// by	both	3	and	5	replace	it	with	the	word	“FizzBuzz.”

for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else {
        console.log(i)
    }
}