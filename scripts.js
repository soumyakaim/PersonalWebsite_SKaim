// scripts.js for the functionality of the website

        function openPopup(id) {
            let popup = document.getElementById(id);
            if (popup) {
                popup.style.display = "block";
                popup.style.zIndex = "9999"; // Ensure it's above all content
            }
        }


        function closePopup(id) {
            let popup = document.getElementById(id);
            popup.style.display = "none";
        }


        // Creates a magical pixie-dust effect when moving the mouse
        // The dust particles disappear after 10 seconds
       document.addEventListener("mousemove", function (e) {
            for (let i = 0; i < 5; i++) { // Generate multiple particles per movement
                let dust = document.createElement("img");
                dust.src = "images/pixie-dust.png"; // Make sure this file exists
                dust.className = "pixi-dust";
                document.body.appendChild(dust);
        
                // Randomize position slightly around cursor
                let offsetX = (Math.random() - 0.5) * 20; // Random between -10px and 10px
                let offsetY = (Math.random() - 0.5) * 20;
        
                dust.style.left = `${e.pageX + offsetX}px`;
                dust.style.top = `${e.pageY + offsetY}px`;
        
                // Random size between 10px and 30px
                let size = Math.random() * 20 + 10;
                dust.style.width = `${size}px`;
                dust.style.height = `${size}px`;
        
                // Random animation duration (shorter ones disappear faster)
                let duration = Math.random() * 2 + 1; // Between 1s and 3s
                dust.style.animation = `fadeOut ${duration}s linear forwards, movePixieDust ${duration}s ease-in-out`;
        
                setTimeout(() => {
                    dust.remove();
                }, duration * 1000); // Remove when animation ends
            }
        });


        // Function to play a sound
        function playSound(soundFile) {
            let audio = new Audio(soundFile);
            audio.volume = 0.1; // Adjust volume if needed
            audio.play();

            // Stop audio after 1.5 seconds
            setTimeout(() => {
                audio.pause();
                audio.currentTime = 0; // Reset the audio to the beginning
            }, 1500); // 1500ms = 1.5 seconds
        }


        // Play chime sound when clicking buttons
        document.querySelectorAll("button, .box").forEach((element) => {
            element.addEventListener("click", function () {
                playSound("audio/chime-74910.mp3");
            });
        });

        // Easter Egg Cat Pop-Up with Single Box Interaction
        // Easter Egg: After 3 minutes, a cat pop-up appears
        // User can interact with it
        setTimeout(() => {
            document.getElementById('cat-popup').style.display = 'block';
        }, 180000); // 3 minutes

        function handleCatResponse(response) {
            let popup = document.getElementById('cat-popup');
            if (response === 'yes') {
                popup.innerHTML = "<h2>🎉 Yay! The cat loves you too! 😺</h2>";
            } else {
                popup.innerHTML = "<h2>😿 Oh no! The cat is sad now...</h2>";
            }
            setTimeout(() => { popup.style.display = 'none'; }, 2000); // Close after 2 seconds
        }

                // Function to change background color on interaction
        function changeBackground(color) {
            document.body.style.backgroundColor = color;
        }

        // Reset background color when leaving the section
        function resetBackground() {
            document.body.style.backgroundColor = "#FDFEF9"; // Default yellowish white grey???
        }

        // Add event listeners to each section
        // Changes background color when hovering over sections
        // Resets color when the cursor leaves
        document.querySelector(".section1").addEventListener("mouseenter", function() {
            changeBackground("#FFF0F0"); // Soft Red
        });
        document.querySelector(".section1").addEventListener("mouseleave", resetBackground);

        document.querySelector(".section2").addEventListener("mouseenter", function() {
            changeBackground("#FFF0FE"); // Soft Purple
        });
        document.querySelector(".section2").addEventListener("mouseleave", resetBackground);

        document.querySelector(".section3").addEventListener("mouseenter", function() {
            changeBackground("#F3F0FF"); // Soft Dark Blue
        });
        document.querySelector(".section3").addEventListener("mouseleave", resetBackground);

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }


        function showFunGraphic(imageSrc) {
            let funGraphics = document.createElement('img');
            funGraphics.src = imageSrc;
            funGraphics.style.position = "fixed";
            funGraphics.style.width = "150px";
            funGraphics.style.zIndex = "999";
            
            // Always position on the right side
            funGraphics.style.right = "10px";
            funGraphics.style.top = Math.random() * (window.innerHeight - 150) + "px";

            document.body.appendChild(funGraphics);

            // Remove the image after 3 seconds
            setTimeout(() => {
                funGraphics.remove();
            }, 3000);
        }


        // Clicking on different sections triggers different fun images on the right side
        document.querySelector(".section1").addEventListener("click", function() {
            showFunGraphic("images/harlingen_profielpic_1.jpg"); // Replace with a fish GIF
        });

        document.querySelector(".section2").addEventListener("click", function() {
            showFunGraphic("images/laptoppixel.gif"); // Replace with a fishbowl GIF
        });

        document.querySelector(".section3").addEventListener("click", function() {
            showFunGraphic("images/butterflies 255.gif"); // Replace with a laptop GIF
        });


        // Close popups when clicking outside of them
        // If the user clicks outside of a pop-up, it closes automatically
        document.addEventListener("click", function (event) {
            let popups = document.querySelectorAll(".popup");
            popups.forEach(popup => {
                if (!popup.contains(event.target) && !event.target.classList.contains("box")) {
                    popup.style.display = "none";
                }
            });
        });



        // View Counter (Stored in Local Storage)
        // Counts website visits and stores the value in Local Storage
        // The view count increases each time the page load
        document.addEventListener("DOMContentLoaded", function () {
            let counterElement = document.getElementById("viewCounter");
        
            if (counterElement) { // Ensure the element exists before updating
                let views = localStorage.getItem("viewCounter") || 0;
                views = parseInt(views) + 1; // Convert to number and increment
                localStorage.setItem("viewCounter", views);
                counterElement.innerText = views;
            } else {
                console.error("❌ viewCounter element not found in the DOM.");
            }
        });

        document.addEventListener("DOMContentLoaded", function () {
            // Ensure #viewCounter exists before updating
            let counterElement = document.getElementById("viewCounter");
            if (counterElement) {
                let views = localStorage.getItem("viewCounter") || 0;
                views = parseInt(views) + 1; // Convert to number and increment
                localStorage.setItem("viewCounter", views);
                counterElement.innerText = views;
            } else {
                console.error("❌ viewCounter element not found.");
            }
        
            // Ensure #topButton exists before adding event listener
            let topButton = document.getElementById("topButton");
            if (topButton) {
                topButton.addEventListener("click", function () {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                });
            } else {
                console.error("❌ topButton element not found.");
            }
        });



        document.getElementById("topButton").addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });






