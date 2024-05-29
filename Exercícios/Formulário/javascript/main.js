const form = document.getElementById('form');
let valorA = document.getElementById('valorA');
let valorB = document.getElementById('valorB');
let valid;
const submitbtn = document.getElementById('submit');

form.addEventListener('submit', function(e){
 e.preventDefault(); 
 if (valorB.value > valorA.value){
  console.log('B > A');
  valorA.style.color = 'green';
  valorA.style.border = '1px solid green';
  valorB.style.color = 'green';
  valorB.style.border = '1px solid green';
  submitbtn.style.color = 'green';
  submitbtn.style.border = '1px solid green';
  alert('Validação concluída, prossiga com o cadastramento.')
 }
 else if (valorB.value <= valorA.value){
  console.log('B < A');
  valorA.style.color = 'red';
  valorA.style.border = '1px solid red';
  valorB.style.color = 'red';
  valorB.style.border = '1px solid red';
  submitbtn.style.color = 'red';
  submitbtn.style.border = '1px solid red';
  alert('Validação não concluída, cadastramento cancelado.')
 }
})