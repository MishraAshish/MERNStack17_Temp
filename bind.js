//In dynamic contexts when we need the context to be applied after some time

var Skills = {
    primarySkill : "Core Javascript",
    secondaySkill : "React and Redux",
    getSkillSet : function () {
        console.log(this.primarySkill, this.secondaySkill)
        // var that = this

        // setTimeout(function name() { //this executes in its timeout context 
        //     //console.log(this)
        //     //console.log(this.primarySkill, this.secondaySkill)
        //     console.log(that.primarySkill, that.secondaySkill)
        // }, 2000)

        setTimeout(function name() { //this executes in its timeout context 
            console.log(this.primarySkill, this.secondaySkill)
        }.bind(this), 5000)

    }
}

Skills.getSkillSet() //getDetails is executed over user so context/scope is user, but it changes inside setTimeout

//getDetails is executed over user so context/scope is user, but it changes inside setTimeout


//an example on UI, by doing DOM manipulation

//html example
{/* <button id="newBtnBind">Practice Div</button> */}
// var btn = document.getElementById("newBtnBind")
// var onclick = function(){alert("The name is "+ this.name)}

// btn.addEventListener("click", this.onclick.bind(user1), false) // changing context to user1 upon click
// btn.addEventListener("click", this.onclick, false) //without bind context remains global

// var user1 = {
//     name : "Mueen"
// }

// btn.removeEventListener("click",this.onclick)


//second example

//<button id=​"newBtnBind">​Practice Bind​</button>​
//var selectBtn = document.getElementById("newBtnBind")
//var info = {"Event" : "Click", "Topic" : "Bind"}

//var clickFunc = function(){alert(`The Event is ${this.Event} and topic is  ${this.Topic}`)}
//selectBtn.addEventListener("click", clickFunc.bind(info), false)

//var info2 = {"Event" : "Multiple Click", "Topic" : "UnderStood Bind Purpose"}
//selectBtn.addEventListener("click", clickFunc.bind(info2), false)
