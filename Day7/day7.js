const leftPart = document.querySelector('.leftPart');
const rightPart = document.querySelector('.rightPart');

leftPart.addEventListener('mouseover', () => {
    leftPart.style.flex = '70%';
    rightPart.style.flex = '30%';
});

rightPart.addEventListener('mouseover', () => {
    leftPart.style.flex = '30%';
    rightPart.style.flex = '70%';
});