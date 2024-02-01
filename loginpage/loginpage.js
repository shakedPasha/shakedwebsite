const users = { "shakedemail@.com":  "123p5g",
                "1234email@.com":  "526p5s",
                "4560email@.com":  "758m3z",
                "6345email@.com": "453e9g", 
                "test123": "1234"}

            function checkLogin() {
                const enteredEmail = document.getElementById("email").value;
                const enteredPassword = document.getElementById("password").value;
    
                
                if (users[enteredEmail] === enteredPassword) {
                    alert("Login successful!");
                    window.location.href="welcomepage/welcomepage.html";
                } else {
                    alert("Login failed. Please check your email and password.");
                }
            }
    
            const loginButton = document.getElementById("loginButton");
            loginButton.addEventListener("click", checkLogin);