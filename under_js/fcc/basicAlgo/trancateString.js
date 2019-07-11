function truncateString(str, num) {
 let newStr = '';
 if (str.length > num) {
  return (newStr = str.slice(0, num) + '...');
 } else {
  return str;
 }
}

// truncateString("A-tisket", 8);
truncateString('A-tisket a-tasket A green and yellow basket', 8);
