const menuToggle = document.querySelector(".hamburgerMenu");
const listItem = document.querySelector(".list-item");

menuToggle.addEventListener('click',function(){
    listItem.classList.toggle('listToggle');
})

function active(){
    listItem.classList.toggle('listToggle');
}