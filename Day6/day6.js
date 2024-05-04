const divs = document.querySelectorAll('div');
const singleDivHeight = document.querySelector('div').clientHeight;
console.log(divs);
console.log(singleDivHeight);


let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    let currentScrollTop = window.scrollY;
    if(currentScrollTop > lastScrollTop) {
        let num = 3 + Math.floor(currentScrollTop / singleDivHeight);
        divs[num].className = 'content';
        lastScrollTop = currentScrollTop
    } else {
        let num = 4 + Math.floor(currentScrollTop / singleDivHeight);
        if(num % 2 === 0){
                divs[num].className = 'contentRight';
            } else {
                divs[num].className = 'contentLeft';
            }
            lastScrollTop = 0;
    }
})