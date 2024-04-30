document.addEventListener('DOMContentLoaded', function(){
    window.scrollTo(0,0);
});
iconOne = document.querySelector(".iconOne");
iconTwo = document.querySelector(".iconTwo");
container = document.querySelector('.container');
footer = document.querySelector("footer");

iconOne.onclick = function(){ 
    container.classList.add('show');
    footer.classList.add('show');

};

iconTwo.onclick = function(){
    container.classList.remove('show');
    footer.classList.remove('show');
}