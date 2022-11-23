let hombres = parseInt(prompt ("escribe la cantidad de hombres"));
let mujeres = parseInt(prompt("escribe la cantidad de mujeres"));

 let total = hombres + mujeres; 
 let promedioH = hombres / total;
 let promedioM = mujeres / total;

 const resultadoB = document.getElementById("resultado"); 
 resultadoB.innerText ="el porcentaje de hombres es " + promedioH.toFixed(2); 

 const resultadoM = document.getElementById("resultadoMM");
 resultadoM.innerText = "el porcentaje de mujeres es " + promedioM.toFixed(2);
 



 // hombres / total