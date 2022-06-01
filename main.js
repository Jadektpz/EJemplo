
Swal.fire({
    icon: 'success',
    title: 'bienvenido al Minimarket v2.0',
    text: 'presione OK para continuar',
    confirmButtonText: 'OK'
  })

let productos = ["gaseosa","cerveza","galletas","papas fritas"];

console.log(...productos);//["gaseosa","cerveza","galletas","papas fritas"]
const[a,b] = productos
console.log(a);//gaseosa
console.log(b);//cerveza
 let parrafo = document.createElement("ul");
parrafo.innerHTML =`<p><b>¡Buenos dias!</b></p>
                    <li>gaseosa</li>
                    <li>papas fritas</li> 
                    <li>galeltas</>
                    <li>cerveza</> `
document.body.append(parrafo);  

obtener_localstorage();
//storage && JSON

function obtener_localstorage(){
    let persona ={
        nombre : "johan",
        edad : 25,
        correo : "abc@gmail.com",
        coordenas:{
            lat:20,
            long: -20
        }


    };

    let nombre = "alejandro";

localStorage.setItem("nombre",nombre);
localStorage.setItem("persona" , JSON.stringify(persona) );

//EVENTO TECLAS DIRECCIONALES
}

function sePresionaUnaTecla(event){   
    const teclaPresionada = event.key.toLowerCase();
    
/* if (teclaPresionada =="arrowdown"){
        console.log("Baja");
    }else if(teclaPresionada =="arrowup"){
        console.log("Subi");
    }else if(teclaPresionada =="arrowleft"){
        console.log("Anda a la izquierda");
    }else if(teclaPresionada == "arrowfight"){
        console.log("Anda a la derecha");
    }*/
    teclaPresionada == "arrowdown" && console.log("Baja");
    teclaPresionada == "arrowup" && console.log("subi");
    teclaPresionada == "arrowleft" && console.log("Anda a la izquierda");
    teclaPresionada == "arrowfight" && console.log("Amda a la derecha");

}

document.addEventListener("keyup" , seSoltoUnaTecla)
function seSoltoUnaTecla(event){
    console.log(event)
}


