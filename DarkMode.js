//=======================================================================================================================
//almacenamiento de modo nocturno para páginas
const btnSwitch=document.querySelector(`#switch`);
        btnSwitch.addEventListener(`load`, () => {
            document.body.classList.toggle(`dark`);
            btnSwitch.classList.toggle(`active`);
            //guardamos el darkmode en localstorage
if(document.body.classList.contains(`dark`)){
    localStorage.setItem(`dark-mode`, `true`);
}else{
    localStorage.setItem(`dark-mode`, `false`);
}
        });
        //obtenemos el modo actual en el que estamos
        if(localStorage.getItem(`dark-mode`)===`true`){
            document.body.classList.add(`dark`);
            btnSwitch.classList.add(`active`);
        }else{
            document.body.classList.remove(`dark`);
            btnSwitch.classList.remove(`active`);
        }
//=======================================================================================================================