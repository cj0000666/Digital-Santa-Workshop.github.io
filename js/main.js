

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




document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('giveaway-form');
    const payoutOptions = form.querySelectorAll('input[name="payout"]');
    const paypalEmail = form.querySelector('input[name="paypal_email"]');
    const cryptoType = form.querySelector('select[name="crypto_type"]');
    const wallet = form.querySelector('input[name="wallet"]');
    const container = document.querySelector('#form-container');

    let csvData = [["Name", "Payout Method", "Details"]]; // CSV header

    // Manage form inputs based on payout selection
    payoutOptions.forEach(option => {
        option.addEventListener('change', () => {
            const isPayPal = option.value === 'paypal';
            paypalEmail.disabled = !isPayPal;
            cryptoType.disabled = isPayPal;
            wallet.disabled = isPayPal;
        });
    });

    // Handle form submission
    form.addEventListener('submit', e => {
        e.preventDefault();

        // Collect user data
        const userName = form.querySelector('input[name="name"]').value;
        const payoutMethod = form.querySelector('input[name="payout"]:checked').value;
        const payoutDetails = payoutMethod === "paypal" 
            ? paypalEmail.value 
            : `${cryptoType.value}, ${wallet.value}`;

        // Add user data to CSV array
        csvData.push([userName, payoutMethod, payoutDetails]);

        // Create and display the greeting message
        // Create and display the greeting message
const greetingLabel = document.createElement('div'); // Use a div for flexibility
greetingLabel.innerHTML = `
    <h2 font-family: cursive; margin-top: 20px;">
        Well, ${userName}, I Checked My List and You’re on the Nice List! 🎄
    </h2>
    <p style="font-size: 1.7em;">
        While I work my holiday magic, I want to wish you the best of luck! Remember,
         Christmas is all about joy, love, and the spirit of giving. No matter what,
          you're already a winner in my eyes for spreading the holiday cheer! 🎁


    </p>
    <p style="font-style: italic; font-size: 2em;">
        Stay tuned to see if you’re the lucky giveaway winner!
    </p>
`;
container.appendChild(greetingLabel); // Add the message to the container


        // Hide the form
        form.style.display = 'none';

        // Generate the CSV file
        generateCSV(csvData);
    });

    // Function to generate and download a CSV file
    function generateCSV(data) {
        const csvContent = data.map(row => row.join(",")).join("\n");
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'santa_giveaway.csv';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});