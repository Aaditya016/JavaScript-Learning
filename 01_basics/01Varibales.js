console.log("hello world") //Use to print 

const accountId = 14453 //const variable is uncangeable

let accountName = "Aaditya jain" //use to declare variable and later we can change it's value also
let accountEmail = "aaditya@jain.com"
accountLocation = "jaipur"
let accountState

var accountAge = 20

/*
Prefer Not to use var
because of issue in block scope and functional scope 
*/

accountName = "Adi"
accountEmail = "aj@jain.com"

console.table([accountId,accountName,accountEmail,accountAge,accountLocation,accountState])
