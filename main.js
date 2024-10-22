document.getElementById("navbar").innerHTML = fetch("navbar.html")
.then(Response => Response.text())
.then(data => document.getElementById("navbar").innerHTML = data)

  
   fetch('footer.html')
   .then(response => response.text())
   .then(data => {
       document.getElementById('footer-container').innerHTML = data;
   });

   
document.addEventListener('contextmenu', event => event.preventDefault());



document.addEventListener('DOMContentLoaded', function () {
    const checkBox = document.getElementById('check');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Close menu when any navigation option is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            checkBox.checked = false; // Close the menu
        });
    });

    // Close menu when clicking outside the menu
    document.addEventListener('click', (event) => {
        if (!event.target.closest('nav')) {
            checkBox.checked = false; // Close the menu
        }
    });
});