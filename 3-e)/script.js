alert("Bem-vindo!"); 
let A = Number(prompt("Informe o valor A"));
let B = Number(prompt("Informe o valor B"));
let C = Number(prompt("Informe o valor C"));
let delta = ((B**2) +((-1*4)*A*C))**(1/2);
let X1
let X2

if(isNaN(delta)){

   alert("Não tem raiz");
}else{
   
   if(delta==0){
     X1 = (-1*B/2*A);
     X2=X1;
     alert('O resultado é: X1=${X1}   X2=${X2}');
  }
  if(delta>0){
     X1 = (-1*B+delta)/(2*A);
     X2 = ((-1*B)+(-1*delta))/(2*A);
     alert('O resultado é: X1=${X1}  X2=${X2}');
 }

}