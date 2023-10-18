// <!-- Dropdown Menu JS -->

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')



toggleBtn.onclick = function (){
    console.log('Toggle button clicked');
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}



let isSearchVisible = false; // Track the visibility state

function onButtonClick() {
    const textBox = document.getElementById('textInput');

    if (!isSearchVisible) {
        textBox.classList.remove('hide');
        textBox.classList.add('show');
        textBox.style.width = '200px'; // Adjust the width as needed
        textBox.focus();
        textBox.classList.add('transition-placeholder'); // Add the class for the placeholder transition
        isSearchVisible = true;
    }
}

function onInputBlur() {
    const textBox = document.getElementById('textInput');

    if (isSearchVisible) {
        textBox.classList.remove('show');
        textBox.classList.add('hide');
        textBox.style.width = '0'; // Set the width back to 0 when hiding
        textBox.classList.remove('transition-placeholder'); // Remove the class to reset the placeholder
        isSearchVisible = false;
    }
}






// function oniButtonClick() {
//     const textBox = document.getElementById('textInput');
//     textBox.classList.remove('show');
//     textBox.classList.add('hide');
// }