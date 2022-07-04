const [login, password] = document.querySelectorAll("input");
const btn = document.querySelector("#entry-btn");

function validate(){
    if (login.value && password.value.length >= 8){
        btn.removeAttribute("disabled")
    }else{
        btn.setAttribute("disabled", "disabled");
    }
}

login.addEventListener("input", validate);
password.addEventListener("input", validate);