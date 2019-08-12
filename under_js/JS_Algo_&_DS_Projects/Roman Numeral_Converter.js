// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
 const rom = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I',
 ];
 const n = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

 // 36
 let converted = '';
 for (let i = 0; i < n.length; i++) {
  while (n[i] <= num) {
   // console.log(n[i])
   converted += rom[i];
   num -= n[i];
  }
 }
 return converted;
}

convertToRoman(36);
