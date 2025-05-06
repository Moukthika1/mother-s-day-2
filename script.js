
function moveButterfly(event) {
    const butterfly = event.target;
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    butterfly.style.left = `${randomX}px`;
    butterfly.style.top = `${randomY}px`;
}

function bloomFlower(event) {
    const flower = event.target;
    flower.style.transform = 'scale(1.5)';
    setTimeout(() => flower.style.transform = 'scale(1)', 300);
}

document.querySelectorAll('.crooked-letter').forEach(letter => {
    letter.addEventListener('click', () => {
        alert('You found a hidden message!');
        window.location.href = 'https://example.com';
    });
});
