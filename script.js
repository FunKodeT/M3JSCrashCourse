// Single Element Selectors
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// Multiple Element Selectors
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));

// Loop Example
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// Dynamic Modifications HTML/CSS with JS
// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');
// // btn.addEventListener('click', (e) => {
// // btn.addEventListener('mouseover', (e) => {
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     // console.log('click');
//     // console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// })

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields';
        // alert('Please enter all fields');
        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        // console.log('Success!');
        // Clear Fields
        nameInput.value = '';
        emailInput.value = '';
    // console.log(nameInput.value);
    }
}