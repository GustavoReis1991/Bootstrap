let x = document.querySelector("#msgemail");
function ValidarEmail(){
    let padrao = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (x.value.match(padrao))
    {
        x.innerHTML = "EMAIL VÁLIDO"
    }
    else{
        x.innerHTML = "EMAIL INVÁLIDO"
    }
}