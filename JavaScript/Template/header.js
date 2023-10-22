// <!-- Dropdown Menu JS -->

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')



toggleBtn.onclick = function () {
    console.log('Toggle button clicked');
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}


// <!-- Search Bar -->

let isSearchVisible = false;

function onSearchButtonClick() {
    const textBox = document.getElementById('textInput');

    if (!isSearchVisible) {
        textBox.classList.remove('hide');
        textBox.classList.add('show');
        textBox.style.width = '170px';
        textBox.focus();
        textBox.classList.add('transition-placeholder');
        isSearchVisible = true;
    }
}

function onSearchInputBlur() {
    const textBox = document.getElementById('textInput');

    if (isSearchVisible) {
        textBox.classList.remove('show');
        textBox.classList.add('hide');
        textBox.style.width = '0';
        textBox.classList.remove('transition-placeholder');
        isSearchVisible = false;
    }
}

//<!-- Search Bar Dropdown -->

function onSearchButtonClickDropDown() {
    const textBox = document.getElementById('textInput1');

    if (!isSearchVisible) {
        textBox.classList.remove('hide');
        textBox.classList.add('show');
        textBox.style.width = '170px';
        textBox.focus();
        textBox.classList.add('transition-placeholder');
        isSearchVisible = true;
    }
}

function onSearchInputBlurDropDown() {
    const textBox = document.getElementById('textInput1');

    if (isSearchVisible) {
        textBox.classList.remove('show');
        textBox.classList.add('hide');
        textBox.style.width = '0';
        textBox.classList.remove('transition-placeholder');
        isSearchVisible = false;
    }
}


