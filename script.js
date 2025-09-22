const cards = document.querySelectorAll(".card");
// console.log(cards); 
cards.forEach(function(card){
    const button = document.querySelector(".card-btn");
    button.addEventListener("click",()=>{
        card.classList.toggle("hidden-card");
    })
    

})