const name = document.getElementById('uname')
const password = document.getElementById('pword')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
form.addEventListener('submit',(e) => {
    let message = []
    if(name.value =='' || name.value == null){
        message.push("Username no value")
    }
    e.preventDefault()
    errorElement.innerText = message.join(',')
})