// LINK DO SCROLL,BASTA ADICIONAR AS CLASSES 
ScrollReveal().reveal('.container');

darkMode = () =>{

    const body = document.querySelector("body");
    body.classList.toggle("dark")
}

// Contador automático
const contar = document.querySelector('#contador');
let valor = 0;
       
const contador  = ()=>{
valor ++;
if(valor > 300) return
contar.innerText = valor

}      
setInterval(contador, 10);   
       
        

       