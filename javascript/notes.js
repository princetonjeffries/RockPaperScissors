var playerScore = 0;
var computerScore = 0;
var choice = '';
var cpuNum;
var computer = '';
function startGame(){
    //grab selected value, display at top, clear page, put scores.
    choice = document.getElementById("choice").value;
    console.log(choice);
    document.getElementById('container').innerHTML = '';
    document.getElementById('title').innerHTML = 'Rock Paper or Scissors?';
    document.getElementById('gameType').innerText = ('Best of ' + choice);
    document.getElementById("rock").src = "images/rock.png"
    document.getElementById("paper").src = "images/paper.png"
    document.getElementById("scissors").src = "images/scissors.png"
    document.getElementById('compScore').innerHTML = ('Computer: ' + computerScore);
    document.getElementById('playerScore').innerHTML = ('You: ' + playerScore);
}
//When player chooses rock
function rock(){
    cpu();
    if(computer == 'scissors'){
        playerScore++;
        document.getElementById('playerScore').innerHTML = ('You: ' + playerScore);
        document.getElementById(rock).classList.add('green-glow');
        setTimeout(function() {document.getElementById(rock).classList.remove('green-glow')})
        
    }else if(computer =='paper'){
        computerScore++;
        document.getElementById('compScore').innerHTML = ('Computer: ' + computerScore);
    }else if(computer =='rock'){
        snackbar();
    }
    console.log(playerScore);
    console.log(computerScore);

}
//When player chooses paper
function paper(){
    cpu();
    if(computer == 'rock'){
        playerScore++;
        document.getElementById('playerScore').innerHTML = ('You: ' + playerScore);
        document.getElementById(rock).classList.add('green-glow');
        setTimeout(function() {document.getElementById(rock).classList.remove('green-glow')})
        
    }else if(computer =='scissors'){
        computerScore++;
        document.getElementById('compScore').innerHTML = ('Computer: ' + computerScore);
    }else if(computer =='paper'){
        snackbar();
    }
    console.log(playerScore);
    console.log(computerScore);
}
//When player chooses scissors
function scissors(){
    cpu();
    if(computer == 'paper'){
        playerScore++;
        document.getElementById('playerScore').innerHTML = ('You: ' + playerScore);
        document.getElementById(rock).classList.add('green-glow');
        setTimeout(function() {document.getElementById(rock).classList.remove('green-glow')})
        
    }else if(computer =='rock'){
        computerScore++;
        document.getElementById('compScore').innerHTML = ('Computer: ' + computerScore);
    }else if(computer =='scissors'){
        snackbar();
    }
    console.log(playerScore);
    console.log(computerScore);
}
//Generates CPU's Choice
function cpu(){
    cpuNum = Math.floor(Math.random()*3 + 1);
    if(cpuNum == 1){
        computer = 'rock'; 
    }else if(cpuNum == 2){
        computer = 'paper';
    }else if(cpuNum == 3){
        computer = 'scissors';
    }
    
}

//Keeps track of Score
function scoreKeep(){
    console.log(choice);
    if(choice == 3){
        console.log('Computer Wins');
        if(computerScore == 2){
            document.getElementById('gameOver').innerHTML = 'GAME OVER! CPU WINS!';
            document.getElementById('restartButton').style.display = 'inline';
            
        } else if(playerScore == 2){
            document.getElementById('gameOver').innerHTML = 'GAME OVER! YOU WIN!';
            document.getElementById('restartButton').style.display = 'inline';
        }
    }else if(choice == '5'){
        if(computerScore == 3){
            document.getElementById('gameOver').innerHTML = 'GAME OVER! CPU WINS!';
            document.getElementById('restartButton').style.display = 'inline';
        } else if(playerScore == 3){
            document.getElementById('gameOver').innerHTML = 'GAME OVER! YOU WIN!';
            document.getElementById('restartButton').style.display = 'inline';
        }
    }else if(choice == "7"){
        if(computerScore == 4){
            document.getElementById('gameOver').innerHTML = 'GAME OVER! CPU WINS!';
            document.getElementById('restartButton').style.display = 'inline';
        } else if(playerScore == 4){
            document.getElementById('gameOver').innerHTML = 'GAME OVER! YOU WIN!';
            document.getElementById('restartButton').style.display = 'inline';
        }
    }
}

function snackbar() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  