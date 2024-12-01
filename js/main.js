

      // Countdown Timer
function updateCountdown() {
        const countdownday=document.getElementById('day')
        const countdownday_hero=document.getElementById('day_hero')
        const now = new Date();
        const christmas = new Date(now.getFullYear(), 11, 25);
        if (now > christmas) christmas.setFullYear(christmas.getFullYear() + 1);
        const diff = christmas - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownday.textContent=`${days} DAYS     ${hours} HOURS   ${minutes} MINS     ${seconds} SECS`
        countdownday_hero.textContent=`${days} DAYS     ${hours} HOURS   ${minutes} MINS     ${seconds} SECS`
      }
  
      
setInterval(updateCountdown, 1000);
updateCountdown();

    // Function to create snowflakes
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
        
        // Randomize snowflake properties
    const size = Math.random() * 1.5 + 0.5; // Size between 0.5em and 2em
    const positionX = Math.random() * 90; // Horizontal starting position
    const duration = Math.random() * 4 + 4; // Fall duration between 3s and 6s
    const initialPositionY = Math.random() * -20 - 10; // Start position between -10% and -30% viewport height
        
        // Apply styles to the snowflake
    snowflake.style.left = `${positionX}vw`;
    snowflake.style.fontSize = `${size}em`;
    snowflake.style.animationDuration = `${duration}s`;
    snowflake.style.animationDelay = `${Math.random() * 2}s`; // Random delay for staggered fall
    snowflake.style.top = `${initialPositionY}vh`; // Start above the screen in a random range
  
        // Append to body
    document.body.appendChild(snowflake);
  
        // Remove snowflake after its animation ends
    setTimeout(() => {
        snowflake.remove();
        }, duration * 1000);
      }
  
      // Generate snowflakes continuously
setInterval(createSnowflake, 100); // Create a new snowflake every 100ms



function change_greeting_label() {
    const greeting_label = document.querySelector("#user_label");
    const user_input = document.querySelector("#user");
    const submit_button = document.querySelector("#submit");

    submit_button.onclick = function(event) {
        // Prevent default form submission (if inside a form)
        event.preventDefault();

        // Get the value from the input field
        const user_input_value = user_input.value;

        // Update the label with the input value
        greeting_label.textContent = `Well, ${user_input_value}, I Checked My List and You’re on the Nice List! Have a Joyful Christmas and a Magical Holiday Season! 🎄🎁`;

        // Hide the input field
        user_input.style.display = "none";

        // Hide the submit button as well (optional)
        submit_button.style.display = "none";
    };
}

// Call the function to set up the event
change_greeting_label();



