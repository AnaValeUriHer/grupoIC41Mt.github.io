"use strict";

var forma = document.getElementById("forma"),      
    salidaComida = document.getElementById("salidaComida"),
    comidas = document.getElementsByName("comidas");
forma.addEventListener("click", validaComida, false);

 
function validaComida(){
  var comidasSeleccionadas = []; 
  let total = 0; 
  for (let i = 0; i < comidas.length; i++) {

let comida = comidas[i]; 
if (comida.checked) { comidasSeleccionadas.push(comida.value); 
  switch (comida.value) { case "Hawaiana": total += 45; 
          break; case "Cubana": total += 50; break; 
          case "Mexicana": total += 60; break; 
          case "Española": total += 50; break; 
          case "Suiza": total += 90; break;
          case "Jamon": total += 40; break;
  }
    }

salidaComida.textContent = "Seleccionaste: "
 + comidasSeleccionadas.join(", ")+ "\n " + "\n "+ "\n "+ "Total a Pagar: $" + total; 
}
}
