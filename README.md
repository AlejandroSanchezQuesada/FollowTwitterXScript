# Twitter Auto-Follow Script

This script automatically follows users on Twitter/X at regular intervals. It's designed to be run in the Chrome browser's console.

## How It Works

1. The script finds "Follow" buttons on the current page.
2. It clicks up to 10 "Follow" buttons, with a 1-second delay between each click.
3. After following users, it waits for 60 seconds before repeating the process.
4. A countdown timer shows the time remaining until the next execution.

## How to Use

1. Open Twitter/X in Google Chrome.
2. Navigate to a page where "Follow" buttons are visible (e.g., the "Following" page).
3. Open Chrome DevTools:
   - Press F12 or right-click and select "Inspect"
4. Go to the "Console" tab in DevTools.
5. Copy the entire script.
6. In the console, you may see a message saying "Allow pasting". If so:
   - Type "allow pasting" and press Enter.
   - This is a security feature in Chrome to prevent unwanted code execution.
7. Paste the script into the console.
8. Press Enter to run the script.

## What to Expect

- The script will immediately start following up to 10 users.
- You'll see messages in the console for each user followed.
- After following users, a 60-second countdown will begin.
- The process repeats every minute until you stop it.

## How to Stop the Script

To stop the script at any time, enter this command in the console:

```javascript
clearInterval(window.countdownInterval);
