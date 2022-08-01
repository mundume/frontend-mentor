import './style.css'
import javascriptLogo from './javascript.svg'
import drop from './drop.js'

document.querySelector('#app').innerHTML = `
  <div>
    <nav class= 'navbar'>
    <div class="navbar-left">
     <h1>Snap</h1>
    <ul class= 'lists'>
    <button class='dropdown' id="dropdown" onclick=${drop}>features</button>
    <li>Company<li>
    <li>Careers<li>
    <li>About<li>
    <ul>
    </div>
    <div class='navbar-right'>
    <button class='login'> login</buttton>
    <button class='register'>register </buttton>
    </div>
    </nav>
    <main>
    <section class = 'container'>
    <div class='text-content'>
    <h1>Make <br>Remote Work</h1>
    <p>Get your team in sync, no matter your location.<br> Streamline processes, create team rituals <br>and watch productivity soar</p>
    <button class='content-btn'>Learn More</button>
    <div class='icon-container'>
    <img src = 'assets/client-databiz.svg'>
    <img src = 'assets/client-audiophile.svg'>
    <img src = 'assets/client-meet.svg'>
    <img src = 'assets/client-maker.svg'>

    </div>
    </div>
    <div class='img-container'>
    <img src = 'assets/image-hero-desktop.png'>
    </div>
    
    </section>
    </main>
    
  </div>`

  //dropdown  
  drop(document.getElementById('dropdown'))
