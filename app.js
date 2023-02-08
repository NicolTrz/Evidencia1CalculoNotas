const enteredNote1 = document.querySelector(".enteredNote1");
const enteredNote2 = document.querySelector(".enteredNote2");
const enteredNote3 = document.querySelector(".enteredNote3");

const total = document.querySelector(".total");

const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");

const btnCalculate = document.querySelector(".calculate");

btnCalculate.addEventListener("click",calculateAverage);

function calculateAverage() {
    
    let note1 = (enteredNote1.value * 0.30);
    let note2 = (enteredNote2.value * 0.30);
    let note3 = (enteredNote3.value * 0.40);
    
    total.textContent = (note1+note2+note3).toFixed(2)

    if (enteredNote3.value >=1) {
        if (enteredNote1.value <= 5 && enteredNote1.value >= 1 && enteredNote2.value <= 5 && enteredNote2.value >= 1 && enteredNote3.value <= 5 && enteredNote3.value >= 1) {
            total.textContent = "Su nota definitiva es: " + (note1+note2+note3)
            container2.textContent = "";
            container3.textContent = "";
    
            if (note1+note2+note3 <= 3.4) {
                container1.textContent = "Lamentablemente has perdido el resultado, bobo"
            }else if (note1+note2+note3 >= 3.5) {
                container1.textContent = "Has ganado exitosamente el resultado"
            }
        }else{
            total.textContent = "";
            container1.textContent = "¡¡ Las notas ingresadas no son validas !!";
            container2.textContent = "";
            container3.textContent = "";
        }

    }else{

        if (enteredNote1.value <= 5 && enteredNote1.value >= 1 && enteredNote2.value <= 5 && enteredNote2.value >= 1) {
            
            if(note1+note2 >= 2.1){
                
                container1.textContent = "";
                container2.textContent = "Para ganar necesitarías mínimo: " + ((3.5 - (note1 + note2)) / 0.40).toFixed(2);
                container3.textContent = "Para ganar con honores necesitarias mínimo: " + ((4.6 - (note1 + note2)) / 0.40).toFixed(2);
                
            }else{
                
                container1.textContent = "Para recuperar necesitas: " + ((2.1 - (note1 + note2)) / 0.40).toFixed(2);
                container2.textContent = "Para ganar necesitarías mínimo: " + ((3.5 - (note1 + note2)) / 0.40).toFixed(2);
                container3.textContent = "Para ganar con honores necesitarias mínimo: " + ((4.6 - (note1 + note2)) / 0.40).toFixed(2);
    
            }
    
        }else{
            total.textContent = "";
            container1.textContent = "¡¡ Las notas ingresadas no son validas !!";
            container2.textContent = "";
            container3.textContent = "";
        }
    }

}


