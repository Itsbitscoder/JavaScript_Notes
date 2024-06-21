const accountId =14432
let accountEmail = "kunal@gmail.com"
var accountPassword = "2241"
accountCity = "Mumbai" //dont use whitout using variable
let accountState;

// accountId = 2 Not Allowed
accountEmail = "Jadhav@gmail.com"
accountPassword = "7536"
accountCity = "Pune"



console.log(accountId );

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword,accountCity, accountState])


