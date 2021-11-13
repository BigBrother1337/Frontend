 "use strict"
 const tabula = document.querySelector(".tabula");
const ediens = document.querySelector(".food");
const dzeriens = document.querySelector(".drink");
const saldais = document.querySelector(".dessert");
const submit = document.querySelector(".submit");
const alert1 = document.querySelector(".alert1");
const alert2 = document.querySelector(".alert2");
const alert3 = document.querySelector(".alert3");



const rFunc = async function(){
    tabula.innerHTML = "";
    tabula.innerHTML = "<tr><th>Ēdiens</th><th>Dzēriens</th><th>Saldais</th></tr>";
    fetch("http://127.0.0.1:3000").then(res =>res.json())
    .then(res=>res.map(e=>{
        tabula.innerHTML += `<tr><td>${e.Ediens}</td><td>${e.Dzeriens}</td><td>${e.Saldais}</td></tr>`
    }))
    };
    rFunc();
const parbaude = function(){
    if (ediens.value === ""){
        alert1.innerText = (`NAV IEVADĪTS ĒDIENS`);}
        else{
            alert1.innerText = ("")
        };
     if (dzeriens.value === ""){
        alert2.innerText = (`NAV IEVADĪTS DZĒRIENS`);}
        else{
            alert2.innerText = ("")
        };
    if (saldais.value === ""){
        alert3.innerText = (`NAV IEVADĪTS SALDAIS`);}
        else{
            alert3.innerText = ("")
        };
};




submit.addEventListener('click', function(e) {
     let ediensvert = ediens.value;
    let dzeriensvert = dzeriens.value;
    let saldaisvert = saldais.value;
    parbaude();
fetch(`http://127.0.0.1:3000`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },                                                              
    body: JSON.stringify( { Ediens: ediensvert, Dzeriens: dzeriensvert, Saldais: saldaisvert } )
}).then(res =>res.json()).then(res=>{
    if (res.error){
    alert(res.error)}
}).then(()=>{rFunc()});
});




