const divs = document.querySelectorAll('.container div');
console.log(divs);

function changeName(element){
    divs.forEach(div => {
        div.className = "img";
        const h3 = div.querySelector('h3');
        h3.style.display = "none";
    });
    element.className = "imgActive";
};

divs.forEach(element => {
        element.onclick = function(){
            changeName(element);
            const h3 = element.querySelector('h3');
            setTimeout(function(){
                h3.style.display = "block";
            }, 500);
        }
    });
