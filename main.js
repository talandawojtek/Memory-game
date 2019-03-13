let cards = document.querySelectorAll('.card');
cards = [...cards];
const tabColor = ["brown","brown","red","red","blue","blue","orange","orange","green","green","violet","violet"];
const startTime = new Date().getTime();
    
let activeCard = "";
const activeCards = [];
const gamePairs = cards.length/2;
let gameResult = 0;

const clickCard = function(){
    activeCard = this;
    activeCard.classList.remove('hidden');
    if (activeCard == activeCards[0]) return;
    if(activeCards.length === 0){
        activeCards[0] = activeCard;
        return;
    }
    else{
        cards.forEach(card => card.removeEventListener("click", clickCard));
        activeCards[1] = activeCard;
        if(activeCards[0].className === activeCards[1].className){
            activeCards.forEach(card => card.classList.add("off"));
            gameResult++;
            activeCard="";
            activeCards.length = 0;
            cards.forEach(card => card.addEventListener("click", clickCard));
            if(gameResult === gamePairs){
                const endTime = new Date().getTime();
                const resultTime = (endTime - startTime)/1000;
                setTimeout(function(){
                    alert("gratulacje! udało Ci sie ukończyć grę w "+resultTime+ "sekund");
                }, 200)
            }
        }
        else{
            setTimeout(function(){
                activeCards.forEach(card => card.classList.add('hidden'))
                activeCard = "";
                activeCards.length = 0;
                cards.forEach(card => card.addEventListener("click", clickCard));
            },500) 
        }
    }
}
const init = function(){
    cards.forEach(function(card){
        const los = Math.floor(Math.random()*tabColor.length);
        card.classList.add(tabColor[los]);
        tabColor.splice(los, 1);
    });
    setTimeout(function(){
        cards.forEach(function(card){
            card.classList.add("hidden");
            card.addEventListener("click", clickCard);
        });
        
    },500);
};

init()
   