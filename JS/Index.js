//=======================================================================================================================
//función para ingresar solo letras en un input
function sololetras(e){
    key=e.keycode || e.which;
    teclado=String.fromCharCode(key).toLowerCase();
    letras="abcdefghijklmnñopqrstuvwxyz";
    especiales="8-37-38-46-164";
    tecladoEspecial=false;
    for(var i in especiales){
        if (key==especiales[i]){
            tecladoEspecial=true;
            break;
        }
    }
    if(letras.indexOf(teclado)==-1 && !tecladoEspecial){
        return false;
    }
}
//función para ingresar solo números a un input
function solonumeros(e){
    key=e.keycode || e.which;
    teclado=String.fromCharCode(key);
    numeros="0123456789";
    especiales="8-37-38-46";
    teclado_especial=false;
    for(var i in especiales){
        if (key==especiales[i]){
            teclado_especial=true;
        }
    }
    if(numeros.indexOf(teclado)==-1 && !teclado_especial){
        return false;
    }
    }
//=======================================================================================================================
//modo nocturno 
const btnSwitch=document.querySelector(`#switch`);
        btnSwitch.addEventListener(`click`, () => {
            document.body.classList.toggle(`dark`);
            btnSwitch.classList.toggle(`active`);
            //Guardamos el darkmode en localstorage
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
//texto animado de letras caídas
class TextoAnimado{
    constructor(id, objetivo){
        this.texto = document.getElementById(id);
        this.objetivo = document.getElementById(objetivo);
        this.letras = this.texto.innerText.split(``);
        this.texto.innerText = ``;
        this.letras.forEach((letra)=>{
            let caracter = letra === `` ? `&nbsp;`: letra;
            this.texto.innerHTML = this.texto.innerHTML + `
            <div>
            <span>${caracter}</span>
            <span class="segunda-linea">${caracter}</span>
            </div>
            `;
        });

        this.texto.addEventListener(`mouseenter`, () => {
            let cuenta = 0;
            const intervalo = setInterval( () => {
                if(cuenta < this.texto.children.length){
                    this.texto.children[cuenta].classList.add(`animacion`);
                    cuenta+=1;
                }else{
                    clearInterval(intervalo);
                }
            }, 30);
        });

        this.texto.addEventListener(`mouseleave`, () => {
            let cuenta = 0;
            const intervalo = setInterval( () => {
                if(cuenta < this.texto.children.length){
                    this.texto.children[cuenta].classList.remove(`animacion`);
                    cuenta+=1;
                }else{
                    clearInterval(intervalo);
                }
            }, 30);
        });
            }
}

new TextoAnimado(`logo`, `logo`);
//=======================================================================================================================
//palabras escritas
const typed = new Typed(`.typed`, {
    strings: [
        `<i>¡El mejor sitio web para tu negocio!</i>`, 
        `<i>¡Te ayudamos a cumplir tu sueño!</i>`, 
        `<i>¡Hagamoslo juntos!</i>`
    ],
    typeSpeed: 20,
    startDelay: 300,
    backSpeed: 25,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCurse: true,
    cursorChar: `|`,
    contentType: `html`
});
//=======================================================================================================================
//para el popup
var btnAbrirPopup = document.getElementById(`btn-abrir-popup`),
    overlay = document.getElementById(`overlay`),
    popup = document.getElementById(`popup`),
    btnCerrarPopup = document.getElementById(`btn-cerrar-popup`);

btnAbrirPopup.addEventListener(`click`, function(){
overlay.classList.add(`active`);
popup.classList.add(`active`);
});

btnCerrarPopup.addEventListener(`click`, function(){
    overlay.classList.remove(`active`);
    popup.classList.remove(`active`);
    });
//=======================================================================================================================
//para el Tooltip
const icono = document.querySelector(`#icono`);
const Tooltip = document.querySelector(`#Tooltip`);

const calcularPosicionTooltip = () => {
//coordenadas
const x = icono.offsetLeft;
const y = icono.offsetTop;

//tamaño del tooltip
const anchoTooltip = Tooltip.clientWidth;
const altoTooltip = Tooltip.clientHeight;

//posición del tooltip
const izquierda = x - (anchoTooltip/2+15);
const arriba = y - (altoTooltip/4);

Tooltip.style.left = `${izquierda}px`;
Tooltip.style.top = `${arriba}px`;
};

window.addEventListener(`load`, () => calcularPosicionTooltip());
window.addEventListener(`resize`, () => calcularPosicionTooltip());
icono.addEventListener(`mouseenter`, () => {
    Tooltip.classList.add(`activo`);
    calcularPosicionTooltip();
});

/*let timer;
icono.addEventListener(`mouseleave`, () => {
    timer = setTimeout(() => {
        Tooltip.classList.remove(`activo`);
    }, 1000);
});

Tooltip.addEventListener(`mouseenter`, () => clearTimeout(timer));
Tooltip.addEventListener(`mouseenter`, () => Tooltip.classList.remove(`activo`));*/
