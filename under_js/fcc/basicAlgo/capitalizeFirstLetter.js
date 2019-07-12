function titleCase(str) {
 str = str.toLowerCase().split(' ');
 console.log(str);
 let g = [];
 for (let i = 0; i < str.length; i++) {
  g.push(str[i].replace(str[i].charAt(0), str[i].charAt(0).toUpperCase()));
 }
 return g.join(' ');
}

titleCase("I'm a little tea pot");

// solution:
// function titleCase(str) {
//     var convertToArray = str.toLowerCase().split(" ");
//     var result = convertToArray.map(function(val){
//         return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//     });
//     return result.join(" ");
//   }

//   titleCase("I'm a little tea pot");
