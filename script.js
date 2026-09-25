// Generate Stars
const nightSky = document.getElementById('night-sky');
const starCount = 150;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 3 + 0.5;
    
    // Random animation duration and delay
    const duration = Math.random() * 4 + 2;
    const delay = Math.random() * 5;
    
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;
    
    // Opacity based on size for realism
    star.style.opacity = size / 3;
    
    nightSky.appendChild(star);
}

// Typing Effect for Message
const message = "Trung thu này, dẫu ngoài kia có bao nhiêu ánh đèn rực rỡ, nhưng với chồng, ánh sáng ấm áp và tuyệt vời nhất luôn là nụ cười của vợ. Chúc vợ yêu của chồng một mùa Trung thu thật vui vẻ, luôn xinh đẹp và bình an. Cảm ơn em vì đã luôn đồng hành cùng anh. Anh yêu em rất nhiều! 💖";
const typedTextElement = document.getElementById('typed-text');
let index = 0;

function typeText() {
    if (index < message.length) {
        // Handle line breaks if we want to add any later, though string is single line now
        typedTextElement.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeText, 65); // Typing speed
    }
}

// Start typing effect after the container fades in
setTimeout(typeText, 2500);
