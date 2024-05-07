const labels = document.querySelectorAll('label');
console.log([...labels[0].innerText])
labels.forEach(label => {
    label.innerHTML = [...label.innerText].map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`).join('')
});