// Function to wait for a specified time
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to follow 10 people with delay
async function followPeople() {
  const unfollowedButtons = Array.from(document.querySelectorAll('button')).filter(button => 
    button.textContent.trim().toLowerCase() === 'follow' &&
    button.getAttribute('data-testid') && 
    button.getAttribute('data-testid').includes('-follow')
  );
  
  const limit = Math.min(unfollowedButtons.length, 10);
  
  for (let i = 0; i < limit; i++) {
    unfollowedButtons[i].click();
    console.log(`Following user ${i + 1} of ${limit}`);
    await wait(1000); // Wait 1 second (1000 ms) between each action
  }
  
  console.log(`Followed ${limit} people.`);
}

// Function to display the countdown timer
function showCountdown(timeLeft) {
  console.log(`Time until next execution: ${timeLeft} seconds`);
}

// Function to execute the following process every minute with countdown
function startAutomaticFollowing() {
  followPeople();
  
  let timeLeft = 60;
  showCountdown(timeLeft);
  
  window.countdownInterval = setInterval(() => {
    timeLeft--;
    showCountdown(timeLeft);
    
    if (timeLeft <= 0) {
      clearInterval(window.countdownInterval);
      followPeople();
      startAutomaticFollowing();
    }
  }, 1000);
}

// Start the process
startAutomaticFollowing();
