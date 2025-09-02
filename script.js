let btn = document.querySelectorAll(".tile"); 
let res = document.querySelector(".res");

let filled = [false,false,false,false,false,false,false,false,false]; //To store the button click status
let turn = "X";
let gameOver = false;

for(let i =0;i<btn.length;i++){
    btn[i].addEventListener('click',()=>{
        if(!filled[i] && !gameOver){
            btn[i].innerText=turn;
            filled[i] = true;

            let win = checkWin();
            if(win==="X"||win==="O"){
                finish( `
                     <h1>Congrats</h1>
                     <h2>${win} is the winner</h2>
                     <button class="playAgain">Play Again</button>
                 `);
            }
            else if(filled.every(Boolean)){
                finish(`<h1>This Match was a Draw</h1>
                     <button class="playAgain">Play Again</button>
                 `);
            }
            if(turn==="X")
                turn = "O";
            else    
                turn = "X";
        }
    });
}

function finish(message){
    gameOver = true;
    res.style.zIndex = '200';
    res.style.opacity = '0.75';
    res.innerHTML = message;  
    const playAgainBtn = document.querySelector(".playAgain");
    playAgainBtn.addEventListener("click", () => {
        window.location.reload();
    });
}
 
function checkWin(){
    let mat = [[0,1,2],[3,4,5],[6,7,8],
                [0,3,6],[1,4,7],[2,5,8],
                [0,4,8],[2,4,6]];
    for(let i = 0;i<mat.length;i++){
        if(btn[mat[i][0]].innerText!="" && btn[mat[i][0]].innerText==btn[mat[i][1]].innerText&&btn[mat[i][1]].innerText===btn[mat[i][2]].innerText)
            return btn[mat[i][0]].innerText;
    }
}