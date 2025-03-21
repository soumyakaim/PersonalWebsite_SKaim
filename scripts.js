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




        
          
        
          function updateParticles() {
            particles.forEach((particle, index) => {
              let opacity = parseFloat(particle.style.opacity);
              opacity -= 0.03;
              if (opacity <= 0) {
                particles.splice(index, 1);
                particle.remove();
              } else {
                particle.style.opacity = opacity;
                particle.style.transform = `scale(${opacity * 2})`;
              }
            });
            requestAnimationFrame(updateParticles);
          }
        
          init();
        }
        
        // **Call the function to activate it**
        fairyDustCursor();
        
        



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





        
        







