const divs = document.querySelectorAll('.fl');
console.log(divs);
divs.forEach((div) => {div.addEventListener('click', addClass)});

function addClass(event){
  console.log(event)
  event.target.classList.add('fl-anime');
  event.target.addEventListener('mouseleave', removeClass);
  function removeClass(){
    console.log('ola')
    event.target.classList.remove('fl-anime')
  }
}
 
