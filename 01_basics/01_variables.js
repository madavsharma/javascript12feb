const  accountId =11223
let accountEmail = "abc@google.com"
var accountPassword = "12345"
accountcity = "Jammu" // IT STORES VALUE BUT NOT USE THIS 
let accountState;
 accountState = 'KASHMIR';

//accountId = 2 //not allowed
accountEmail = "def@google.com"
accountPassword = "77667"
accountcity = "Pune"
accountCountry = "India"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountcity);

/* PREFER NOT TO USE 'VAR ' BECAUSE OF ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE*/
console.table([accountId, accountEmail, accountPassword, accountcity, accountState])