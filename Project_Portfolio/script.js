let menuVisible = false;
//Function thet shows the menu
function showMenu(){
  if (menuVisible){
    document.getElementById("nav").classList =""; //Hide the menu
    menuVisible = false;
  }else{
    document.getElementById("nav").classList ="responsive"; //Show the menu
    menuVisible = true;
  }
}

function select(){
  //hide menu once an option is selected
  document.getElementById("nav").classList =""; //Hide the menu
  menuVisible = false;
}

//function that applieas animations to skills
function skillsEffect(){
  let skills = document.getElementById("skills");
  let skillsDistance = window.innerHeight - skills.getBoundingClientRect().top;
  if (skillsDistance >= 300){
    let skills2 = document.getElementsByClassName("progress");
    for (let i = 0; i < skills2.length; i++) {
      skills2[i].classList.add(`skill-${i}`);
  }
}
}

//detect scrolling to aplly the animations to the progress bar
window.onscroll = function() {skillsEffect()};