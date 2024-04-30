const searchBar = document.querySelector('.container input');
const container = document.querySelector('.container');

window.addEventListener('DOMContentLoaded', () => {
    searchBar.focus();
});

const searchIcon = document.querySelector('.container i');
let i = 0;
searchIcon.onclick = () => {
switch(i) {
    case 0:
        searchBar.style.width = '0';
        container.style.width = '2.6%';
        i += 1
        return;
    case 1:
        searchBar.style.width = '80%';
        container.style.width = '13%';
        i -= 1;
        searchBar.focus()
        return;
}
}