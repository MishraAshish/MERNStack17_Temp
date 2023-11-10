//we need to import/require from another file

var {User, pi} = require("./module")

console.log(globalThis.User)

User.name = "Adrik "

console.log(User.getUserInfo())

console.log(pi)


//create an account details module and export from module file and import in another file