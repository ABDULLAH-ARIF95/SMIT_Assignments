var userData = [{
    name:'ali',
    email:'alikhan@gmail.com',
    password:'12345',
    rollNumber:"236171"
},
{
    email:'qasim32@gmail.com',
    name:'qasim',
    password:'12345',
    rollNumber:"236172"
},
{
    email:'haseeb123@gmail.com',
    name:'haseeb',
    password:'12345',
    rollNumber:"236173"
},
{
    email:'altaf10@gmail.com',
    name:'altaf',
    password:'12345',
    rollNumber:"236174"
},
{
    email:'majid29@gmail.com',
    name:'majid',
    password:'12345',
    rollNumber:"236175"
},
{
    email:'junaid42@gmail.com',
    name:'junaid',
    password:'12345',
    rollNumber:"236176"
}]
var usernameData = false

function inputValid(e) {
    var inpValue = e.target.value
    if (inpValue.indexOf("!")!==-1||inpValue.indexOf("@")!==-1||inpValue.indexOf("#")!==-1||inpValue.indexOf("$")!==-1||inpValue.indexOf("%")!==-1||inpValue.indexOf("^")!==-1||inpValue.indexOf("&")!==-1||inpValue.indexOf("*")!==-1||inpValue.indexOf(",")!==-1||inpValue.indexOf(".")!==-1||inpValue.indexOf("?")!==-1) {
           e.target.nextElementSibling.innerText = "no special characters allowed"
           e.target.nextElementSibling.style.display = 'block'
           return
        }
        e.target.nextElementSibling.style.display = 'none'
        
        if (e.target.value.length<3) {
            e.target.nextElementSibling.innerText = "Almost Three Characters Required"
            e.target.nextElementSibling.style.display = 'block'
            return
        }
    e.target.nextElementSibling.style.display = 'none'
}
function gmailValid(email) {
    var inpValue = email.target.value
    if (inpValue.indexOf("@gmail.com")===-1) {
        email.target.nextElementSibling.innerText = "invalid gmail"
        email.target.nextElementSibling.style.display = 'block'
        usernameData = false
        return
     }
     email.target.nextElementSibling.style.display = 'none'

}
function rollNumValid(char){
    var inpValue = char.target.value
    var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < alphabet.length; i++) {  
        if (inpValue.indexOf(alphabet[i])!==-1) {
            char.target.nextElementSibling.innerText = "Please enter only numbers "
        char.target.nextElementSibling.style.display = 'block'
        usernameData = false
        return
    }
    i++
    char.target.nextElementSibling.style.display = 'none'
}

if (char.target.value.length<6) {
    char.target.nextElementSibling.innerText = "Almost Six Numbers Required"
    char.target.nextElementSibling.style.display = 'block'
    usernameData = false
    return
}
usernameData = true
char.target.nextElementSibling.style.display = 'none'

}
function submitData(e){
    e.preventDefault();
    var userInfo = document.getElementsByClassName("userinfo")[0]
    var resultError = document.getElementsByClassName("result-error")[0]
    var gmail = document.getElementById("email")
    var username = document.getElementById("username")
    var rollNum = document.getElementById("rollnum")
    var mailSpan = document.getElementById("emailspan")
    var nameSpan = document.getElementById("namespan")
    var rollSpan = document.getElementById("rollspan")
    var passwordSpan = document.getElementById("passwordspan")
    if (!usernameData) return
    var i = 0
    while (i<userData.length) {
        if (userData[i].name===username.value.toLowerCase() && userData[i].rollNumber===rollNum.value && userData[i].email===gmail.value) {
            userInfo.style.display = 'block'
            mailSpan.innerText = `EMAIL: ${userData[i].email}`
            rollSpan.innerText = `ROLL NUMBER: ${userData[i].rollNumber}`
            nameSpan.innerText = `NAME: ${userData[i].name}`
            passwordSpan.innerText = `PASSWORD: ${userData[i].password}`
            resultError.style.display = 'none'
            username.value = ''
            rollNum.value = ''
            gmail.value = ''
            usernameData = false
            return
        }
        userInfo.style.display = 'none'
        resultError.style.display = 'block'
        i++
    }
}
