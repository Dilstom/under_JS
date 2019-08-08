// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// 1. using object

function convertHTML(str) {
 const match = {
  '<': '&lt;',
  '&': '&amp;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
 };
 return str
  .split('')
  .map(i => (match[i] ? (i = match[i]) : i))
  .join('');
}

// or:

function convertHTML(str) {
 var temp = str.split('');
 const match = {
  '<': '&lt;',
  '&': '&amp;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
 };

 for (var i = 0; i < temp.length; i++) {
  match[temp[i]] ? (temp[i] = match[temp[i]]) : null;
 }

 temp = temp.join('');
 // console.log(temp)
 return temp;
}

convertHTML('Dolce & Gabbana');

// 2. using Switch:

function convertHTML(str) {
 var temp = str.split('');

 // Since we are only checking for a few HTML elements I used a switch

 for (var i = 0; i < temp.length; i++) {
  switch (temp[i]) {
   case '<':
    temp[i] = '&lt;';
    break;
   case '&':
    temp[i] = '&amp;';
    break;
   case '>':
    temp[i] = '&gt;';
    break;
   case '"':
    temp[i] = '&quot;';
    break;
   case "'":
    temp[i] = '&apos;';
    break;
  }
 }

 temp = temp.join('');
 return temp;
}

convertHTML('Dolce & Gabbana');

// 3. using regex and replace:

function convertHTML(str) {
 str = str
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');
 return str;
}
