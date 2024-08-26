// Function to wait for a specified time
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Function to scroll down
  function scrollDown() {
    window.scrollTo(0, document.body.scrollHeight);
  }
  
  // Function to follow people with delay
  async function followPeople() {
    const unfollowedButtons = Array.from(document.querySelectorAll('button[data-testid$="-follow"]')).filter(button => 
      button.textContent.trim().toLowerCase() === 'follow' &&
      !button.getAttribute('data-testid').includes('unfollow')
    );
    
    let followedCount = 0;
    
    for (const button of unfollowedButtons) {
      if (followedCount >= 10) break;
      
      if (button.textContent.trim().toLowerCase() === 'follow') {
        button.click();
        followedCount++;
        console.log(`Following user ${followedCount}`);
        await wait(1000); // Wait 1 second (1000 ms) between each action
      }
    }
    
    console.log(`Followed ${followedCount} people.`);
    
    // Scroll down to load more profiles
    scrollDown();
    await wait(2000); // Wait for new content to load
  }
  
  // Function to display the countdown timer
  function showCountdown(timeLeft) {
    console.log(`Time until next execution: ${timeLeft} seconds`);
  }
  
  // Function to execute the following process every minute with countdown
  async function startAutomaticFollowing() {
    await followPeople();
    
    let timeLeft = 60;
    showCountdown(timeLeft);
    
    window.countdownInterval = setInterval(() => {
      timeLeft--;
      showCountdown(timeLeft);
      
      if (timeLeft <= 0) {
        clearInterval(window.countdownInterval);
        startAutomaticFollowing();
      }
    }, 1000);
  }
  
  // Start the process
  startAutomaticFollowing();