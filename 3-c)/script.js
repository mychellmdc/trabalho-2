alert("Bem-vindo!"); 
let nota1=Number(prompt("Indique a nota do 1° bimestre:"));
let nota2=Number(prompt("Indique a nota do 2° bimestre:"));
let nota3=Number(prompt("Indique a nota do 3° bimestre:"));
let nota4=Number(prompt("Indique a nota do 4° bimestre:"));
let total = (nota1 + nota2 + nota3 + nota4)/4;
const media = 5 

if(total>=media){
alert(`Aprovado ${total}`);
}else{
alert(`Reprovado ${total}`)
}