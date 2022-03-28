const buttonEL  =  document.querySelector('button');
const inputEl  =  document.querySelector('input');
const listEl  =  document.querySelector('ul');

function addGoal(){ 
 const enteredValue =  inputEl.value;
 const listItemEl =  document.createElement('li');
 listItemEl.textContent =  enteredValue;
 listEl.appendChild(listItemEl);

}

buttonEL.addEventListener('click',addGoal);