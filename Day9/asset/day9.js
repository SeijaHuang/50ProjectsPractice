const btns = document.querySelectorAll('button');
const audios = document.querySelectorAll('audio');
btns.forEach((element, index) => { 
    element.addEventListener('click', () => {
    stopSongs();
    audios[index].play()
})
});
function stopSongs() {
    audios.forEach(element => {
        element.pause();
        element.currentTime = 0
    })
}