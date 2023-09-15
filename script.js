// COUNTDOWN 
const countdown = document.getElementById("countdown");
let guessBtn = document.getElementById('guessBtn');
//divs gia mines,meres,ores kai lepta
let monthsDiv = document.getElementById('months');
let daysDiv = document.getElementById('days');
let hoursDiv = document.getElementById('hours');
let minutesDiv = document.getElementById('minutes');
let secondsDiv = document.getElementById('seconds');


//date of the concert
const targetDate = new Date("Jul 24 2024, 19:00:00").getTime();

let showCountdown = document.getElementById("show-countdown");
showCountdown.addEventListener('click',countdownFunction);

function countdownFunction() {

    //display the countdown
    countdown.style.display = 'block';
    let countdownInterval = setInterval(intervalFunction,1000);

    function intervalFunction() {
        const currentDate = new Date().getTime();
        const remainingTime = targetDate - currentDate;
        
        if (remainingTime <= 0)
        {
            countdown.innerHTML = "H sinaulia egine!!";
        }
        
        daysLeft = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const monthsLeft = Math.floor(daysLeft / 30); 
        const hoursLeft = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((remainingTime % (1000 * 60)) / 1000);
        
        //display months
        if (monthsLeft == 1)
        {
            monthsDiv.innerHTML = `${monthsLeft} month`;
        }
        else {
            monthsDiv.innerHTML = `${monthsLeft} months`;
        }
        //display days
        
        if (daysLeft == 1)
        {
            daysDiv.innerHTML = `${daysLeft} day`;
        }
        else {
            daysDiv.innerHTML = `${daysLeft} days`;
        }
        //display hours
        if (hoursLeft == 1)
        {
            hoursDiv.innerHTML = `${hoursLeft} hour`;
        }
        else {
            hoursDiv.innerHTML = `${hoursLeft} hours`;
        }
        //display minutes
        if (minutesLeft == 1)
        {
            minutesDiv.innerHTML = `${minutesLeft} minute`;
        }
        else {
            minutesDiv.innerHTML = `${minutesLeft} minutes`;
        }
        //display seconds
        if (secondsLeft == 1)
        {
            secondsDiv.innerHTML = `${secondsLeft} second`;
        }
        else {
            secondsDiv.innerHTML = `${secondsLeft} seconds`;
        }  
       
    }
    
}

guessBtn.addEventListener('click', checkIfGuessIsCorrect);

let guessAnswer = document.getElementById('guessAnswer');


    function checkIfGuessIsCorrect() {
        const targetDate = new Date("Jul 24 2024, 19:00:00").getTime();
        const currentDate = new Date().getTime();
        const remainingTime = targetDate - currentDate;
        const daysLeft = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        console.log("Days left: " +daysLeft);
        console.log("You guessed : " +guess.value);
        //while the guessAnswer container has a firstchild(=the image i have appended) it will remove said image
        while (guessAnswer.firstChild) {
            guessAnswer.removeChild(guessAnswer.firstChild);
        } 
        //create the image as an asnwer
        let img = document.createElement('img');
        img.width = 200;
        img.height = 150;

        if (guess.value == daysLeft)
        {
            img.src = 'catYes.gif';
        }
        else {
            img.src = 'catNo.gif';
        }
        guessAnswer.appendChild(img); 
        guess.value = '';
        guess.innerHTML = '';
    }





