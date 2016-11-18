/**
 * 
 */


function Contatto(nome,cognome,telefono, email)
{
	this.nome=nome;
	this.cognome=cognome;
	this.telefono=telefono;
	this.email=mail;
}

var contatti=[];

function addContatto(contatto){
	contatti.push(contatto);
    aggiungiInHTML(contatto);
}
function aggiungiInHTML(contatto){
   var tBody = document.getElementById("tBody");
   var ultimaRiga = document.getElementById("ultimaRiga");
   var tr= document.createElement("tr")

   var tdNome =document.createElement("td");
   tdNome.textContent = contatto.nome;
   var tdCognome =document.createElement("td");
   tdCognome.textContent = contatto.cognome;

   var tdTelefono =document.createElement("td");
   tdTelefono.textContent = contatto.telefono;

   var tdEmail =document.createElement("td");
   tdEmail.textContent = contatto.email;
   
   tr.appendChild(tdNome);
   tr.appendChild(tdCognome);
   tr.appendChild(tdTelefono);
   tr.appendChild(tdEmail);

   tBody.insertBefore(tr,ultimaRiga);

}

function creaCotatto()
{
	var nome= document.getElementById("nome");
	var cognome= document.getElementById("cognome");
	var telefono= document.getElementById("telefono");
	var email= document.getElementById("email");
	
	return new Contatto(nome.value,cognome.value,telefono.value, email.value);
}
var bottoneAddContatto=document.getElementById("addContatto");
bottoneAddContatto,addEventListener('click',addContatto(creaContatto()));

window.addEventListener('load', bottoneAddContatto);