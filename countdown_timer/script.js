document.getElementById('countdownForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const targetDate = new Date(document.getElementById('datetime').value);
    const countdown = document.getElementById('timeRemaining');
  
    if (isNaN(targetDate)) {
      countdown.textContent = 'Please enter a valid date and time.';
      return;
    }
  
    function updateCountdown() {
      const now = new Date();
      const timeDifference = targetDate - now;
  
      if (timeDifference <= 0) {
        countdown.textContent = 'Countdown complete!';
        clearInterval(interval);
        return;
      }
      
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    //   countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    // }
     // Display the countdown values
  document.getElementById('days').innerHTML = pad(days);
  document.getElementById('hours').innerHTML = pad(hours);
  document.getElementById('minutes').innerHTML = pad(minutes);
  document.getElementById('seconds').innerHTML = pad(seconds);
}

// Function to add leading zeros to single-digit numbers
function pad(number) {
  return number < 10 ? '0' + number : number;
}
  
    updateCountdown(); // Initial call
    const interval = setInterval(updateCountdown, 1000);
  });
  