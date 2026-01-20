const accountId=12345
let accountEmail="jasmine@gmail.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState;

//accountId= 2345; not allowed

accountEmail="hc@gmail.com"
accountPassword="9834"
accountCity="delhi"
console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);
/*prefer not to use var because it is function scoped not block scoped */