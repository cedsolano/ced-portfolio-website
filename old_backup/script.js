const canvas = document.getElementById("galaxy");
const ctx = canvas.getContext("2d");

let w, h, stars = [];
const starCount = 250;
const speed = 8; // Change this to make it faster or slower

function init() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    stars = [];
    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * w - w / 2,
            y: Math.random() * h - h / 2,
            z: Math.random() * w,
            o: Math.random() * 0.5 + 0.5
        });
    }
}

backBtn.style.setProperty('display', 'flex', 'important');
function draw() {
    // This creates the 'motion blur' trail effect
    ctx.fillStyle = "rgba(10, 15, 31, 0.25)"; 
    ctx.fillRect(0, 0, w, h);

    ctx.save();
    ctx.translate(w / 2, h / 2);

    stars.forEach(s => {
        // Perspective Math
        let x = s.x / (s.z / w);
        let y = s.y / (s.z / w);
        let size = (1 - s.z / w) * 2;

        if (s.z > 0 && x > -w/2 && x < w/2 && y > -h/2 && y < h/2) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(77, 163, 255, ${s.o})`;
            ctx.lineWidth = size;
            
            // Draw a line from current position to a slightly further point
            let prevZ = s.z + speed * 2;
            let px = s.x / (prevZ / w);
            let py = s.y / (prevZ / w);
            
            ctx.moveTo(x, y);
            ctx.lineTo(px, py);
            ctx.stroke();
        }

        s.z -= speed;

        // Reset stars when they pass the camera
        if (s.z <= 0) {
            s.z = w;
            s.x = Math.random() * w - w / 2;
            s.y = Math.random() * h - h / 2;
        }
    });

    ctx.restore();
    requestAnimationFrame(draw);
}

window.addEventListener("resize", init);
init();
draw();

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        // If scrolled down more than 300px, show the button
        backToTopBtn.classList.add("show");
    } else {
        // Otherwise, hide it
        backToTopBtn.classList.remove("show");
    }
});

// Smooth scroll to top when clicked
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.getElementById("backToTop");

    window.onscroll = function() {
        // Check if the page is scrolled more than 300px
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    };

    // When the user clicks, smooth scroll to top
    backToTopBtn.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
});



// --- SCROLL REVEAL LOGIC ---
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Trigger when 150px into view

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

// Listen for scroll events
window.addEventListener("scroll", reveal);

// Run once on load in case elements are already in view
reveal();

