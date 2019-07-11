function factorialize(num) {
 return num === 0 ? 1 : num * factorialize(num - 1);

 // for loop
 // if(num === 0){
 //   return 1;
 // }
 // for(let i=num-1; i>0; i--){
 //   num *= i;
 // }
 // console.log(num)
 // return num;
}

factorialize(5);
