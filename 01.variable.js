const accountId = 14432
let accountEmail = "kunal@gmail.com"
var accountPassword = "2241"
accountCity = "Mumbai" //dont use whitout using variable
let accountState;

// accountId = 2 Not Allowed Because it is Const..
accountEmail = "Jadhav@gmail.com" // is can be updated because of let and var
accountPassword = "7536"
accountCity = "Pune"



console.log(accountId );

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword,accountCity, accountState])


