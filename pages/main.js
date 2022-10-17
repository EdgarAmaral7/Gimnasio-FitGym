
function calcularimc(){
    let img = document.getElementById('img')
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value

    let imc = peso / (altura * altura).toFixed(2)

    if (imc >= 0 && imc < 18.5){
        img.src = '/images/falco.webp'
        document.body.style.background = '#686a30'
    }
    else if( imc >= 18.5 && imc < 24.9){
        img.src = '/images/calvo.jpg'
        document.body.style.background = '#686a30'
    }
    else if( imc >= 25 && imc < 30){
        img.src = '/images/sobre.jpg'
        document.body.style.background = '#686a30'
    }
    else if( imc >= 30.1 && imc < 35){
        img.src = '/images/obeso.jpg'
        document.body.style.background = '#686a30'
    }
    else if( imc >= 35.1 && imc < 99){
        img.src = '/images/mor.jpg'
        document.body.style.background = '#686a30'
    }
    else{imc
    }

}

let button = document.getElementById('button')
button.addEventListener('click', calcularimc)