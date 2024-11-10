let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const displayEndTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
// clear existing timers
clearInterval(countdown);
    // Pass the end time to display_endTime
    display_endTime(then);
    
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        // Check if we should stop the timer
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        // Display the remaining time
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    console.log(display); 
    timerDisplay.textContent = display; // Update the display element
}

function display_endTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    const display = `Be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
    console.log(display);
    displayEndTime.textContent = display; // Update the end time display in HTML
}

function startTimer() {
    const seconds = parseInt(this.dataset.time, 10); // Convert the time to a number
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
//form
document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
    const mins=this.minutes.value;
    console.log(mins);
    timer(mins*60);
    this.reset();
})

