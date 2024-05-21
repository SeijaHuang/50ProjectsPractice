// const divs = document.querySelectorAll('.questions-container');
const btns = document.querySelectorAll('.faq-toggle');

// let toggle = true;

btns.forEach((item, index) => {
  item.addEventListener('click', () => {
    // addActive(index, toggle);
    // toggle = !toggle;
    item.parentNode.classList.toggle('active');
  });
});

// function addActive(index, toggle) {
//   toggle
//     ? divs[index].classList.add('active')
//     : divs[index].classList.remove('active');
// }
