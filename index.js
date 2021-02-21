/////// ANADIR ELEMENTOS DESDE HTML USANDO DOMM
//<button onclick="add(event)"></button>

const MArray = [];

const nameForm = document.getElementById("idName");

const add = (event)=>{
    event.preventDefault();  //<<Evita compartamiento por defecto
	MArray.push(nameForm.value)
    listaMascotas();
    document.getElementById("idForm").reset();
    nameForm.focus();   
}

///agegar a html

//<ul id=idLista">
//////////inyectar array
//</ul>

const listaMascotas = () =>{
	const ul = document.getElementById("idLista");

	ul.innerHTML = "";
	MArray.forEach( (mascota, indice) =>{
      const item = document.createElement("LI");
      item.innerHTML = "<li>"+ mascota +"</li>"
      ul.appendChild(item);
	})
}
//// cuando cargue la pagina
window.onload = () =>{
	listaMascotas();
	nameForm.focus();
}