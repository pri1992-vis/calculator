// 
const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

 function calculate() {
     try {
    // console.log('Caluculating:','display.value');
         display.value = eval(display.value);
    } catch (error) {
         display.value = 'Error';

        // console.log(error);

}
 }
 
// function caluculate(){
//     try{
//         console.log('Caluculating:','display.value');

//     }
// }
//new code 
// let isResult = false;

// function appendToDisplay(input) {
//     if (isResult) {
//         clearDisplay();
//         isResult = false;
//     }
//     display.value += input;
// }

// function clearDisplay() {
//     display.value = '';
// }

// function calculate() {
//     try {
//         display.value = eval(display.value);
//     } catch (error) {
//         display.value = 'Error';
//         console.error(error);
//     }
    
//     isResult = true;
// }