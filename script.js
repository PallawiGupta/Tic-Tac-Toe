
let ContainerEl = document.querySelector('.container');
document.addEventListener('DOMContentLoaded', () => {
    
    let playerTxt = document.querySelector('.message');
    let restartBtn = document.getElementById('restartbtn');
    let boxes = document.querySelectorAll('.box');

    

    const O_TXT = "O";
    const X_TXT = "X";

    

    let CurrentPlayer = X_TXT;
    let spaces = Array(9).fill(null);

    let winnerIndicator = getComputedStyle(document.body).getPropertyValue("--darkColor");

    //start game
    const startGame = () => {
        boxes.forEach((box)  =>  box.addEventListener("click", boxClicked));
    };

    //box clicked
    function boxClicked(e){
        const id = e.target.id;

//check id 
        if(!spaces[id]){
            spaces[id] = CurrentPlayer;
            e.target.innerText = CurrentPlayer;
//winner logic
            if(playerHasWon() != false){
                playerTxt.innerHTML =`<h2 class="message">Congratulations Player ${CurrentPlayer}</h2>`
                winnerIndicator = playerHasWon();

                winnerIndicator.map(
                    (box)=> (boxes[box].style.backgroundColor = "#f4d30f"),
                );
                ContainerEl.classList.add('success');
            }
            CurrentPlayer = CurrentPlayer == X_TXT ? O_TXT : X_TXT;
        }

    }
    // winning combination 
    const winningCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    
    //player win

    function playerHasWon(){
        for(condition of winningCombination){
            // console.log(condition);
            let [a,b,c] = condition;
            if(spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c] ){
                return [a,b,c];
            }
        }
        return false;
    }

    

    startGame();
});
