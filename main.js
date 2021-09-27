
// text error message

let no1Input = document.querySelector('#number1');
let no1Error = document.querySelector('.error-message1')
let inputValue1;

no1Input.addEventListener('change', function(event){
    inputValue1 = event.target.value;
    
       
    if(isNaN(inputValue1) === true ){
        no1Error.innerHTML = "Introduce just numbers, NOT letters!";
    }
    else{
        no1Error.innerHTML = "";
    }
});

let no2Input = document.querySelector('#number2');
let no2Error = document.querySelector('.error-message2')
let inputValue2;

no2Input.addEventListener('change', function(event){
    inputValue2 = event.target.value;
    
       
    if(isNaN(inputValue2) === true ){
        no2Error.innerHTML = "Introduce just numbers, NOT letters!";
    }
    else{
        no2Error.innerHTML = "";
    }
});

console.log(inputValue1); 
console.log(inputValue2); 
//calculatorx 

const sum = document.querySelector('#sum');
const diff = document.querySelector('#diff');
const multi = document.querySelector('#multiplication');
const div = document.querySelector('#division');

let result = document.querySelector('#result');

sum.addEventListener('click', function(){
    result.innerHTML = parseInt(inputValue1) + parseInt(inputValue2);
});

diff.addEventListener('click', function(){
    result.innerHTML = parseInt(inputValue1) - parseInt(inputValue2);
});

multi.addEventListener('click', function(){
    result.innerHTML = parseInt(inputValue1) * parseInt(inputValue2);
});

div.addEventListener('click', function(){
    result.innerHTML = parseInt(inputValue1) / parseInt(inputValue2);
});
