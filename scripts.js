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


               /*!
         * Fairy Dust Cursor.js
         * - 90's cursors collection
         * -- https://github.com/tholman/90s-cursor-effects
         */
        
        (function fairyDustCursor() {
          
          var possibleColors = ["#FFD700", "#FFFFFF", "#FF69B4"]; // Brighter gold, white, pink for a glowing effect
          var width = window.innerWidth;
          var height = window.innerHeight;
          var cursor = { x: width / 2, y: height / 2 };
          var particles = [];
          
          function init() {
            bindEvents();
            loop();
          }
          
          // Bind events
          function bindEvents() {
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('touchmove', onTouchMove);
            document.addEventListener('touchstart', onTouchMove);
            window.addEventListener('resize', onWindowResize);
          }
          
          function onWindowResize() {
            width = window.innerWidth;
            height = window.innerHeight;
          }
          
          function onTouchMove(e) {
            if (e.touches.length > 0) {
              for (var i = 0; i < e.touches.length; i++) {
                addParticle(e.touches[i].clientX, e.touches[i].clientY, getRandomColor());
              }
            }
          }
          
          function onMouseMove(e) {
            cursor.x = e.clientX;
            cursor.y = e.clientY;
            addParticle(cursor.x, cursor.y, getRandomColor());
          }
          
          function addParticle(x, y, color) {
            var particle = new Particle();
            particle.init(x, y, color);
            particles.push(particle);
          }
          
          function updateParticles() {
            for (var i = 0; i < particles.length; i++) {
              particles[i].update();
            }
            for (var i = particles.length - 1; i >= 0; i--) {
              if (particles[i].lifeSpan < 0) {
                particles[i].die();
                particles.splice(i, 1);
              }
            }
          }
          
          function loop() {
            requestAnimationFrame(loop);
            updateParticles();
          }
          
          /**
           * Particles
           */
          function Particle() {
            this.character = "✨"; // Change to star emoji for stronger fairy dust effect
            this.lifeSpan = 150; // Increase lifespan for longer effect
            this.initialStyles = {
              "position": "absolute",
              "display": "block",
              "pointerEvents": "none",
              "z-index": "10000000",
              "fontSize": "20px", // Bigger sparkles
              "will-change": "transform",
              "text-shadow": "0 0 8px rgba(255, 255, 255, 0.9)" // Glowing effect
            };
        
            this.init = function (x, y, color) {
              this.velocity = {
                x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 2),
                y: Math.random() * -2
              };
        
              this.position = { x: x - 10, y: y - 10 };
              this.initialStyles.color = color;
        
              this.element = document.createElement("span");
              this.element.innerHTML = this.character;
              applyProperties(this.element, this.initialStyles);
              this.update();
        
              document.querySelector(".container").appendChild(this.element);
            };
        
            this.update = function () {
              this.position.x += this.velocity.x;
              this.position.y += this.velocity.y;
              this.lifeSpan--;
        
              this.element.style.transform =
                "translate3d(" +
                this.position.x +
                "px," +
                this.position.y +
                "px, 0) scale(" +
                this.lifeSpan / 150 +
                ")";
            };
        
            this.die = function () {
              this.element.parentNode.removeChild(this.element);
            };
          }
        
          /**
           * Utils
           */
          function getRandomColor() {
            return possibleColors[Math.floor(Math.random() * possibleColors.length)];
          }
        
          function applyProperties(target, properties) {
            for (var key in properties) {
              target.style[key] = properties[key];
            }
          }
        
          init();
        })();




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






