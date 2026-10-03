let buttons = document.querySelectorAll(".myclass");
let resetButton = document.querySelector(".reset-button");
let turnX = false;
let count = 0;


let winnerArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const disableButton = ()=>{
    buttons.forEach( allButtons =>{
        allButtons.disabled = true;
    });
};

const checkWinner = () =>{  
    for ( let key of winnerArray ){
        let btn1 = buttons[key[0]].innerText;
        let btn2 = buttons[key[1]].innerText;
        let btn3 = buttons[key[2]].innerText;

        if ( btn1 != "" && btn2 != "" && btn3 != "" && btn1 === btn2 && btn2 === btn3 ){
            console.log( "Winner Found and winner is : " , btn1);
            disableButton();
            return true;
        }
    } return false;
}


buttons.forEach( ( button) =>{
    button.addEventListener( "click" , () =>{
        if( turnX ){
            button.innerText = "O";
            turnX = false;
        }else{
            turnX = true;
            button.innerText = "X";
        }
        count++;
        button.disabled = true;

        if( !checkWinner() && count === 9 ){
            alert(" This is a Draw");
        }
    });

});

const resetGame = ()=>{
    buttons.forEach( button=>{
        button.disabled = false;
        button.innerText = "";
    });
    turnX = false;
    count = 0;
};

resetButton.addEventListener( "click" , resetGame);


