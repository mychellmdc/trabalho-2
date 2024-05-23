alert("Bem-vindo!"); 
let valorA=Number(prompt("Insira o valor A"));
let valorB=Number(prompt("Insira o valor B"));
let valorC=Number(prompt("Insira o valor C"));
let menor,maior,meio;

if((valorA<valorB)&&(valorA<valorC)){ 
    menor=valorA

 if((valorB)<(valorC)){
    meio=valorB
    maior=valorC
  }else{
    meio=valorC
    maior=valorB

  }
}

 if((valorB<valorA)&&(valorB<valorC)){
      menor=valorB
     if((valorA)<(valorC)){
        meio=valorA
        maior=valorC
   }else{
    meio=valorC
    maior=valorA
      }
}
     if((valorC<valorA)&&(valorC<valorB)){
           menor=valorC
     if((valorA)<(valorB)){
         meio=valorA
         maior=valorB
    }else{
         meio=valorB
         maior=valorA

      }
}
alert(`${menor},${meio},${maior}`);