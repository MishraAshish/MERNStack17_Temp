//each file in javascript is termed as a module

var User = {
    name : "Bryan",
    address : "Somewhere on earth",
    sessionTraining : "MERNSTack",
    getUserInfo : function () {
        return { 
            name : this.name,
            session : this.sessionTraining,
            address : this.address 
        }
    }
}

var aConstant = 3.1413

//all static properties can be added to globalThis - like connection string
globalThis.User = {
    User : "Second User"
}

module.exports = {
    User : User,
    pi : aConstant
}