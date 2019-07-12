function booWho(bool) {
 return typeof bool === 'boolean';

 // or
 // return bool === true || bool === false ? true : false;
}

booWho(null);
