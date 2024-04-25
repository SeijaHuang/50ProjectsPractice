const divs = document.querySelectorAll('.step');
const lines = document.querySelectorAll('.line');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
// console.log(divs, lines);
// console.log(prev, next);

let i = 0;
next.onclick = function(){
    if(i > 2){
        return
    } else {
    divs[i].className= "stepActive";
    lines[i].style.width = ((i + 1) / 3 ) * 100 + "%";
    i++
    };

    if(prev.style.backgroundColor = "#999999"){
        prev.style.backgroundColor = "#3597da";
    } else { return };
};

prev.onclick = function(){
    if ( i < 1){
        return;
    } else {
        i--;
        divs[i].className = "step";
        lines[i].style.width = 0;
        if(i === 0){
            prev.style.backgroundColor = "#999999"
        };
    }
}