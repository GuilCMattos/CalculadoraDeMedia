var nome = "Guilherme"
var notaPrimeiroBimestre = 9
var notaSegundoBimestre = 5
var notaTerceiroBimestre = 7
var notaQuartoBimestre = 5

var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaQuartoBimestre + notaTerceiroBimestre)/4

var notaFixada = notaFinal.toFixed(1)
console.log(notaFixada)

let res = document.getElementById("res")

if (notaFixada >= 7) { 
    res.innerHTML= `Parabéns você foi aprovado com a média ${notaFixada}`
} else { 
    res.innerHTML= `Infelizmente sua média foi ${notaFixada}, então você está reprovado`
}

let grauFahrenheit = 75

let conversaoCelsius = (grauFahrenheit - 32) * 5/9

let conversaoFixada = conversaoCelsius.toFixed(1)

res.innerHTML += "<br>A conversão de " +grauFahrenheit + " Fahrenheit para Celsius é "  + conversaoFixada + "º"

console.log(conversaoFixada)



// 

// console.log("Bem-vindo " + nome)
// console.log(notaFixada)

// isso é um comentário

// Revisão 
// Variáveis, strings, console.log, toFixed, operacões matemáticas, concatenacão, 