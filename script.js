/*
formula é imc= peso / altura x altura

IMC	Categoria
abaixo de 16,00	Baixo peso Grau III
16,00 a 16,99	Baixo peso Grau II
17,00 a 18.49	Baixo peso Grau I
18,50 a 24,99	Peso ideal
25,00 a 29,99	Sobrepeso
30,00 a 34,99	Obesidade Grau I
35,00 a 39,99	Obesidade Grau II
40,0 e acima	Obesidade Grau III
*/

let inputNome = document.getElementById("name");
let inputPeso = document.getElementById("peso");
let inputAltura = document.getElementById("altura");

let resultado = document.getElementById("result")


function calcular(){
    let nome = inputNome.value
    let peso = inputPeso.value
    let altura = inputAltura.value

    let imc =  (peso / (altura * altura))*10000;
    

    resultado.innerHTML = `<p>${nome}, seu IMC é: ${parseInt(imc)}</p>`
    grau(imc);
    
}



function grau(imc){
    
    switch(true){
        case imc < 16:
            resultado.innerHTML += `<p> ${parseInt(imc)} Baixo peso GrauIII</p>`;  
            break;
        case imc <16.99:
            resultado.innerHTML += `<p> ${parseInt(imc)} Baixo peso GrauII</p>` ;
            break;
        case imc <18.49:
            resultado.innerHTML += `<p> ${parseInt(imc)} Baixo peso GrauI</p>`;
            break;    
        case imc <24.99:
            resultado.innerHTML += `<p> ${parseInt(imc)} Peso ideal</p>` ; 
            break;  
        case imc <29.99:
            resultado.innerHTML += `<p> ${parseInt(imc)} Obesidade GrauI</p>` ;
            break;
        case imc <39.99 :
            resultado.innerHTML += `<p> ${parseInt(imc)} Obesidade GrauII</p>`;
            break;
        default: /*imc >40: */
            resultado.innerHTML += `<p> ${parseInt(imc)} obesidade GrauIII</p>` ;           
            break;
            
                   
    }


}
