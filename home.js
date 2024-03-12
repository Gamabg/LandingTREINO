 // Dynamically adding background image to banner
 const banner = document.querySelector('.banner');
 banner.style.backgroundImage = "url('banner.jpg')";

 // Creating elements and appending them to the DOM
 const footer = document.createElement('div');
 footer.classList.add('footer');
 footer.innerHTML = "<p>&copy; 2024 John Doe. All rights reserved.</p>";
 document.body.appendChild(footer);