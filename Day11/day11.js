const introductionInfo = document.getElementsByClassName('introductionInfo');
const title = document.querySelectorAll('.title');
const divsToChange = document.querySelectorAll('.box > div');

document.addEventListener('keydown', (event) => {
    changeDisplay();
    addTitleContent();
    changePressedInfo(event);
});

const titleContent = ['event.key', 'event.keyCode', 'event.code']

function addTitleContent(){
    for(let i = 0; i < title.length; i++){
        title[i].innerHTML = titleContent[i]
    }
}

function changeDisplay(){
    introductionInfo[0].classList.add('hide');
}

function changePressedInfo (event){
    const codeInfo = [event.key, event.keyCode, event.code];
    for(let i = 0; i < divsToChange.length; i++){
        divsToChange[i].innerHTML = codeInfo[i];
        divsToChange[i].classList.add('content');
    }
}