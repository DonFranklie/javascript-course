let calculation = localStorage.getItem('calculationHistory') ||'';  
        displayCalculation();      


        function updateCalculation(number){
            calculation += number;
            
            displayCalculation();

            localStorage.setItem('calculationHistory', calculation);
            
            // console.log(calculation);
        }
        

        function clearButton(){
            calculation = '';
            displayCalculation();
            // console.log(calculation);
        }

        function equalButton(){
            calculation = eval(calculation);

            displayCalculation();
            // console.log(calculation);
        }

        function displayCalculation() {
          let calculationDisplay = document.querySelector('.calculationDisplay');

          calculationDisplay.innerHTML = calculation;
        }