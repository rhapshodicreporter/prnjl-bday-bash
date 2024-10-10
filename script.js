const particleContainer = document.querySelector('.particle-container');
const starContainer = document.querySelector('.star-container');
const mouseTrail = document.querySelector('.mouse-trail');
const bdaysong = document.getElementById('birthdaySong');
const dancingGifs = document.querySelector('.dancing-gifs');
const surpriseButton = document.getElementById('surpriseButton');
const heroMessage = document.querySelector('.hero-message');
const heroHeading = document.querySelector('.hero-heading');
const bubbleContainer = document.getElementById('bubble-container');
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
const messages = [
    "May all your dreams come true!",
    "Enjoy your special day to the fullest!",
    "Here’s to another year of amazing adventures!",
    "Cheers to you and your wonderful journey ahead!",
    "May your birthday be as amazing as you are!",
    "Wishing you endless joy on your special day!",
    "May this year be your best one yet!",
];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Firework class
class Firework {
  constructor(x, y) {
      this.x = x;
      this.y = y;
      this.fireworkColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      this.particles = [];
      this.exploded = false;
  }

  // In the Firework class
  update() {
    if (!this.exploded) {
        this.y -= 2; // Slow down upward movement (was 5)
        if (this.y <= 300) { // Height before explosion
            this.explode();
        }
    }
    this.particles.forEach(particle => particle.update());
  }

  explode() {
      this.exploded = true;
      for (let i = 0; i < 65; i++) {
          this.particles.push(new Particle(this.x, this.y, this.fireworkColor));
      }
  }

  draw() {
      if (!this.exploded) {
          ctx.fillStyle = this.fireworkColor;
          ctx.beginPath();
          ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
          ctx.fill();
      }
      this.particles.forEach(particle => particle.draw());
  }
}

// Particle class
class Particle {
  constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 3 + 1;
      this.speedX = (Math.random() - 0.5) * 6;
      this.speedY = (Math.random() - 0.5) * 6;
      this.color = color;
      this.alpha = 1;
  }

  // In the Particle class
  update() {
    this.x += this.speedX * 0.5; // Slow down horizontal movement (was 1)
    this.y += this.speedY * 0.5; // Slow down vertical movement (was 1)
    this.alpha -= 0.01; // Slow down fade out (was 0.02)
  }

  draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
  }
}

let fireworks = [];

// Function to animate fireworks
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((firework, index) => {
        firework.update();
        firework.draw();
        if (firework.exploded && firework.particles.length === 0) {
            fireworks.splice(index, 1); // Remove firework when done
        }
    });
    requestAnimationFrame(animate);
}

// Function to create fireworks on click
function createFirework(event) {
    const x = event.clientX;
    const y = event.clientY;
    fireworks.push(new Firework(x, y));
}

// Generate bubbles dynamically
for (let i = 0; i < 45; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  
  // Set random bubble size (smaller range)
  const size = Math.random() * 20 + 10; // Random size between 10px and 30px
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  
  // Random position
  bubble.style.left = `${Math.random() * 100}vw`;
  
  // Random animation duration and delay
  bubble.style.animationDuration = `${Math.random() * 5 + 5}s`; // Between 5 and 10 seconds
  bubble.style.animationDelay = `${Math.random() * 5}s`; // Random delay before starting

  bubbleContainer.appendChild(bubble);
}

// Function to wrap each letter in a span tag
function animateHeadingLetters(text) {
    return text.split('').map(letter => `<span class="letter">${letter}</span>`).join('');
}

// Set the hero-heading content with the split letters
heroHeading.innerHTML = animateHeadingLetters(heroHeading.textContent);

// Add CSS animation classes to each letter
const letters = document.querySelectorAll('.letter');
letters.forEach((letter, index) => {
    // Delay the animation of each letter based on its index
    letter.style.animationDelay = `${index * 0.1}s`;
});

// Function to display messages one by one
let currentIndex = 0; // Keep track of the current message index

function showNextMessage() {
    // Update the message in the hero section
    heroMessage.textContent = messages[currentIndex];
    
    // Increment the index
    currentIndex = (currentIndex + 1) % messages.length; // Loop back to the start
}

// Show the first message immediately
showNextMessage();

// Set an interval to change messages every 3 seconds
let messageInterval = setInterval(showNextMessage, 3000); // Change the interval time as needed

// Function to trigger the confetti
function triggerConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
}

// Initially hide the dancing GIFs
let fireworksDisplayed = false;
let isAnimating = false;
let songEnded = false; // Flag to check if the song has ended
dancingGifs.style.display = 'none';

function generateGifs() {
  if (isAnimating || songEnded) return;

  isAnimating = true;

  const gifs = [
    document.querySelector('.dancing-gif1'),
    document.querySelector('.dancing-gif2'),
    document.querySelector('.dancing-gif3'),
    document.querySelector('.dancing-gif4'),
    document.querySelector('.dancing-gif5'),
    document.querySelector('.dancing-gif6'),
    document.querySelector('.dancing-gif7'),
    document.querySelector('.dancing-gif8'),
    document.querySelector('.dancing-gif9'),
    document.querySelector('.dancing-gif10'),
    document.querySelector('.dancing-gif11'),
    document.querySelector('.dancing-gif12'),
    document.querySelector('.dancing-gif13'),
    document.querySelector('.dancing-gif14'),
    document.querySelector('.dancing-gif15'),
    document.querySelector('.dancing-gif16'),
    document.querySelector('.dancing-gif17'),
    document.querySelector('.dancing-gif18'),
    document.querySelector('.dancing-gif19'),
    document.querySelector('.dancing-gif20'),
    document.querySelector('.dancing-gif21'),
    document.querySelector('.dancing-gif22'),
    document.querySelector('.dancing-gif23'),
    document.querySelector('.dancing-gif24'),
    document.querySelector('.dancing-gif25'),
    document.querySelector('.dancing-gif26'),
    document.querySelector('.dancing-gif27'),
    document.querySelector('.dancing-gif28'),
    document.querySelector('.dancing-gif29'),
    document.querySelector('.dancing-gif30'),
    document.querySelector('.dancing-gif31'),
    document.querySelector('.dancing-gif32'),
    document.querySelector('.dancing-gif33'),
    document.querySelector('.dancing-gif34'),
    document.querySelector('.dancing-gif35'),
    document.querySelector('.dancing-gif36'),
    document.querySelector('.dancing-gif37'),
    document.querySelector('.dancing-gif38'),
    document.querySelector('.dancing-gif39'),
    document.querySelector('.dancing-gif40'),
    document.querySelector('.dancing-gif41'),
    document.querySelector('.dancing-gif42'),
    document.querySelector('.dancing-gif43'),
    document.querySelector('.dancing-gif44'),
    document.querySelector('.dancing-gif45'),
    document.querySelector('.dancing-gif46'),
    document.querySelector('.dancing-gif47'),
    document.querySelector('.dancing-gif48'),
    document.querySelector('.dancing-gif49'),
    document.querySelector('.dancing-gif50'),
    document.querySelector('.dancing-gif51'),
    document.querySelector('.dancing-gif52'),
    document.querySelector('.dancing-gif53')
  ];
  
  let currentIndex = 0;

  function showNextGif() {
    // Hide all GIFs
    if (songEnded){
      gifs.forEach(gif => {
        gif.style.display = 'none';
      });
      return; // Exit the function when song ends
    }
    
    // Hide all GIFs
    gifs.forEach(gif => {
      gif.style.display = 'none';
      gif.style.opacity = 0;
    });

    // Reset the GIF by replacing it with a new element
    const currentGif = gifs[currentIndex];
    const gifParent = currentGif.parentNode;
    const newGif = currentGif.cloneNode(); // Clone the GIF element
    gifParent.replaceChild(newGif, currentGif); // Replace old GIF with new

    // Show the current GIF
    newGif.style.display = 'block';
    newGif.style.opacity = 1;
    newGif.classList.add('floating');
    
    // Remove the GIF after a certain time 
    setTimeout(() => {
      newGif.style.opacity = 0; // Start fading out
      
      // After fading out, show the next GIF
      setTimeout(() => {
        newGif.style.display = 'none';
        
        // Move to the next GIF
        currentIndex = (currentIndex + 1) % gifs.length; // Loop back to the start
        showNextGif(); // Recursively show the next GIF
      }, 500); // Fade out duration
    }, 2620); // Time each GIF stays visible 
  }

    // Start showing the first GIF
    showNextGif();

    if (dancingGifs.style.display === 'none' || dancingGifs.style.display === '') {
        dancingGifs.style.display = 'flex';
    }
    
    // Automatically reset when the song ends
  bdaysong.addEventListener('ended', () => {
    songEnded = true;
    clearInterval(messageInterval);
    dancingGifs.style.display = 'none'; // Hide the GIFs when the song ends
    surpriseButton.style.display = 'none';
    heroHeading.style.display = 'none';
    heroMessage.style.display = 'none';
  });

    // // Reset the flag when all GIFs have been shown
    // setTimeout(() => {
    //   isAnimating = false; // Reset the flag after the last GIF
    // }, gifs.length * (2000 + 500)); // Total duration for all GIFs (time visible + fade out)
}

surpriseButton.addEventListener('click', () => {
    bdaysong.play();
    triggerConfetti(); // Generate confetti
    songEnded = false;
    
    generateGifs();
    if (fireworksDisplayed) return; // Prevent firing again if already shown

    fireworksDisplayed = true; // Set the flag to true
    // Create 5 fireworks at random positions
    for (let i = 0; i < 6; i++) {
      createFirework({ clientX: Math.random() * canvas.width, clientY: Math.random() * canvas.height });
    }
});

// Start animation
animate();

document.addEventListener('mousemove', (e) => {
  const circle = document.createElement('div');
  circle.style.left = `${e.pageX}px`;
  circle.style.top = `${e.pageY}px`;
  mouseTrail.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 300); // Remove circle after 300ms
});

function createStars(numberOfStars) {
    const starContainer = document.createElement('div');
    starContainer.classList.add('stars');
    
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random position within the window
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;
      
      star.style.left = `${randomX}px`;
      star.style.top = `${randomY}px`;
      
      // Random twinkling duration and delay
      const randomDuration = Math.random() * 2 + 1; // Between 1s and 3s
      const randomDelay = Math.random() * 5; // Random delay up to 5s
      star.style.animationDuration = `${randomDuration}s`;
      star.style.animationDelay = `${randomDelay}s`;
      
      // Append star to container
      starContainer.appendChild(star);
    }
    
    document.body.appendChild(starContainer);
}

// Call this function on page load
window.onload = function() {
    createStars(150); // Create 200 stars, can adjust the number for more or fewer stars
};  

// Generate particles
for (let i = 0; i < 80; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  
  // Random position
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;

  // Random size and color
  const size = Math.random() * 5 + 5; // Size between 5px and 10px
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.backgroundColor = `rgba(255, 255, 255, ${Math.random()})`; // Random white color

  // Append to particle container
  particleContainer.appendChild(particle);
}
  
window.addEventListener('scroll', () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star) => {
      const scrollPosition = window.scrollY;
      star.style.opacity = 1 - scrollPosition / 1000; // Fade out with scroll
    })
});
