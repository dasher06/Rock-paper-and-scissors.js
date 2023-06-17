const p1=document.getElementById("player")
const c1=document.getElementById("computer")
const r1=document.getElementById("result")
const choice=document.querySelectorAll("ch")
let player;
let computer;
let result;
choice=forEach(button => button.addEventListener("click", () => {
    player=button.textContent
    computerturn()
    p1.textContent=`Player: ${player}`
    c1.textContent=`Bot: ${computer}`
    r1.textContent= cw()
}))
function computerturn(){
    const random=Math.floor(Math.random()*4)
    switch(random){
        case 1:
            computer=="Rock"
            break
        case 2:
            computer=="Paper"
            break
        case 3:
            computer=="Scissors"
            break
    }
}

function cw(){
    if(player==computer){
        return "Draw!!!!!!!!!!!!!!!!!!!!!!!";
    }
    else if(player=="Rock"){
        return (computer=="Paper") ? "Bot Won" : "You won!!!!"
    }
    else if(player=="Paper"){
        return (computer=="Scissors") ? "Bot won" : "You won!!!!"
    }
    else if(player=="Scissors"){
        return (computer=="Rock") ? "Bot won" : "Yo0u won!!!!"
    }
}
