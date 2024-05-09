const button = document.querySelector('div button');
const jokeField = document.querySelector('div p');

console.log(button, jokeField);

button.onclick = () => changeJoke();

async function changeJoke(){
    const url = "https://icanhazdadjoke.com/";
    const header = {Accept: "application/json"};
    
    const response = await fetch(url, {
        headers: header
    });

    const jokes = await response.json();
    jokeField.innerHTML = jokes.joke;

}

