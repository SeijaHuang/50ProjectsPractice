window.onload = () => {
    setTimeout(()=> {
        document.querySelector('.container').classList.add('show');
        document.querySelector('div').classList.add('show');
        const number = document.querySelector('div');
        let currentCount = 0;
        let changeNumber = setInterval(() => {
            number.innerHTML = `${currentCount}%`;
            currentCount++;
            console.log(currentCount);
            if(currentCount > 100) {
                clearInterval(changeNumber);
            }
        }, 50);
    });
}