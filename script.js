// icone contient le premier élément <i> trouvé dans le code
const icone = document.querySelector("i");
console.log(icone);
//btnButton contient le premier élément avec la class btn
const btnButton = document.querySelector(".btn");
console.log(btnButton);
//je soumet l'icone à une action au clic
icone.addEventListener('click', ()=>{
    console.log('icone cliquée !');
    icone.classList.toggle("fa-smile-wink");
    icone.classList.toggle('happy');
});

//je soumet le bouton à une action au clic
btnButton.addEventListener('click', ()=>{
    console.log("bouton cliqué !!");
    if (btnButton.innerText === "Abonné") {
        btnButton.innerText = "Abonnez-vous";
    } else {
        btnButton.innerText = "Abonné";
    }
    
})