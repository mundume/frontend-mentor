export default function dropdown(element){
    
    let drop =document.getElementById('dropdown')
    let dropdown = document.querySelector('.dropdown-content')
  
    drop.addEventListener('click', function(){
      if(dropdown.style.display===""){
        dropdown.style.display==="block"
      }else{
        dropdown.style.display="";
      }
      console.log('clicked')
    })
    window.onclick = function (event) {
      if (!event.target.matches('.dropdown')) {
          document.getElementById('dropdown-content')
              .style.display = "none";
      }
    }
  }
  

   