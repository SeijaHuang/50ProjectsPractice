// window.onload = () => {
//     setTimeout(()=> {
//         document.querySelector('.container').classList.add('show');
//         document.querySelector('div').classList.add('show');
//         const number = document.querySelector('div');
//         let currentCount = 0;
//         let changeNumber = setInterval(() => {
//             number.innerHTML = `${currentCount}%`;
//             currentCount++;
//             console.log(currentCount);
//             if(currentCount > 100) {
//                 clearInterval(changeNumber);
//             }
//         }, 50);
//     });
// }

window.onload = () => {
  const twitter = document.querySelector('.twitter');
  const youtube = document.querySelector('.youtube');
  const facebook = document.querySelector('.facebook');
  setNumberCount(1200, twitter);
  setNumberCount(5000, youtube);
  setNumberCount(7500, facebook);
};

function setNumberCount(max, div) {
  let currentCount = 0;
  const increment = max / (1500 / 10);
  let changeNumber = setInterval(() => {
    currentCount += increment;
    if (currentCount < max) {
      div.textContent = `${Math.ceil(currentCount)}`;
    } else {
      div.textContent = max;
      clearInterval(changeNumber);
    }
  });
}
