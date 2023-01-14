// LINK DO SCROLL,BASTA ADICIONAR AS CLASSES 
ScrollReveal().reveal('.container');



darkMode = () =>{

    const body = document.querySelector("body");
    body.classList.toggle("dark")
}

// Contador automático
let contar = document.querySelector('#contador');
		let contador = 0;
        
        const contagem = ()=>{
           
            setInterval(() => contar.innerHTML = contador++, 1);

                       
            
        }
       
          clearInterval
        contagem();
        

       