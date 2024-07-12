function handleSimClick() {
    window.location.href = 'https://www.youtube.com/watch?v=-VEUWrmVsQ4';
}

function moveButton() {
    const button = document.getElementById('nao');
    const container = document.querySelector('.container');
    
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    
    const newLeft = Math.random() * (containerRect.width - buttonRect.width);
    const newTop = Math.random() * (containerRect.height - buttonRect.height);
    
    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
}
