//cardholder name
let nameCard = document.querySelector('.card__details-name');
let nameInput = document.querySelector('#cardholder');
let nameErrorDiv = document.querySelector('.form__cardholder--error error');

//card number
let numberCard = document.querySelector('.card__number');
let numberInput = document.querySelector('#cardNumber');
let numberErrorDiv = document.querySelector('.form__inputnumber--error')

//MM
let monthCard = document.querySelector('.card__month');
let monthInput = document.querySelector('#cardMonth')
let monthError = document.querySelector('.form__input-mm--error')

// YY
let yearCard = document.querySelector('.card__year');
let yearInput = document.querySelector('#cardYear');
let yearErrorDiv = document.querySelector('.form__input-yy--error');

//cvc 
let cvcCard = document.querySelector('.card-back__cvc');
let cvcInput = document.querySelector('#cardCvc');
let cvcError = document.querySelector('.form__input-cvc--error');





//ingreso del nombre
nameInput.addEventListener('input', ()=>{
    if(nameInput.value == ''){
        nameCard.innerText = 'Ramon Vargas'
    }else{
    nameCard.innerText = nameInput.value;
    }
});

//ingreso del numero de tarjeta 

numberInput.addEventListener('input', event=>{

    let inputValue = event.target.value;

    //actualizar numero de la tarjeta

    numberCard.innerText = numberInput.value;

//validando que haya una letra, agregando espacios cada 4 digitos, borrando espacios 


     let regExp = /[A-z]/g;
     if(regExp.test(numberInput.value) == true) {
        errorInput(numberInput, numberErrorDiv, 'Formato invalido, solo numeros.', true);
      
     }else{
        numberInput.value = inputValue.replace(/\s/g,'').replace(/([0-9]{4})/g, '$1 ').trim();
        errorInput(numberInput, numberErrorDiv, '', false);
        };

     if(numberInput.value == ''){
        numberCard.innerText = '0000 0000 0000 0000'; 
     }
});

//ingreso del mes 

monthInput.addEventListener('input', ()=>{
    monthCard.innerText = monthInput.value;
   
    
});

//ingreso del YY
yearInput.addEventListener('input', ()=>{
    yearCard.innerText = yearInput.value;
   
});

//ingreso cvc 
cvcInput.addEventListener('input', ()=>{
    cvcCard.innerText = cvcInput.value;
   
    
})












//confirmar con boton

let confirBoton = document.querySelector('.form__submit')

confirBoton.addEventListener('click', event=>{
    event.preventDefault();

   /*  // validar Name
    verifyCampo(nameInput,nameErrorDiv); */


    //validar numero 


    //validar mes 
    if(parseInt(monthInput.value)>0 && parseInt(monthInput.value)<=12){
        errorInput(monthInput,monthError,'', false );
    }else {
        errorInput(monthInput,monthError,'Mes incorrecto', true);
    }

    //validar yy

    
    // validar cvc
})



//funciones

function errorInput(divInput, divError, msgError,error){
    if(error == true){
        divError.innerText = msgError;
        divInput.style.borderColor = '#FF0000';
    }else {
    
        divError.innerText = msgError;
        divInput.style.borderColor = 'hsl(279, 6%, 55%)';

}

}

/* function verifyCampo(divInput, divError){
    if(divInput.value.length> 0){
        errorInput(divInput,divError,'',false);
    }else{
        errorInput(divInput, divError, "No puede estar vacio", true);
    }
} */