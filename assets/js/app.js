// select sections with a class of section(all)
const sections = document.querySelectorAll('.section');
//controls(parent section holding the icons)
const sectBtns = document.querySelectorAll('.controls');
// buttons with a class of control for  individual buttons in controls
const sectBtn = document.querySelectorAll('.control');
// select body/main content
const allSections = document.querySelector('.main-content');


function pageTransitions(){
    // button click active class: get rid of class that is not active and 
    // display which is active
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // sections active class
    allSections.addEventListener('click', (e) =>{
        // console.log (e.target); // confirm it's targeting
        const id = e.target.dataset.id; // take the data-ids and store in a variable id
        if(id){
            // remove selected from the other button
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')


            // hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const elements = document.getElementById(id);
            elements.classList.add('active');
        }

    })
}

pageTransitions();

function renderHood(hood) {
  // build animal
  let card = document.createElement("li");
  card.className = "card";
  card.innerHTML = `
    <img src = "${hood.image}">
    <div class = "content">
        <h4>${hood.name}</h4>
        <p>
            <span>${hood.inventory}</span> items
        </p>
        <p>
        ${hood.description}
        </p>
    </div>
    <div class='buttons'>
    <button>Sell</button>
    `;
  // Add hood card to DOM
  document.querySelector("#display-hoodies").appendChild(card);
}

function getHoodies(){
  fetch('http://localhost:3000/hoodies')
  .then(response => response.json())
  .then(hoodies => hoodies.forEach(hood => renderHood(hood)))
}

function initialize(){
  getHoodies();
}
initialize()