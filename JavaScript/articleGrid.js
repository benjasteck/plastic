// Target the grid items
const grid1 = document.getElementById('grid1');
const grid2 = document.getElementById('grid2');
const grid3 = document.getElementById('grid3');
const grid4 = document.getElementById('grid4');
const grid5 = document.getElementById('grid5');
const grid6 = document.getElementById('grid6');

// Target the images inside grid1 and grid4
const img1 = grid1.querySelector('img');
const img4 = grid4.querySelector('img');
const img5 = grid5.querySelector('img');

const grid3Content = grid3.querySelector('.gridContent');
const grid3H3 = grid3Content.querySelector('h3');
const grid3H2 = grid3Content.querySelector('h2');
const grid3P = grid3Content.querySelector('p');


grid1.addEventListener('mouseenter', () => {
    grid1.style.backgroundColor = '#5bc86e';
    grid2.style.backgroundColor = '#5bc86e';
    img1.style.transform = 'scale(1.05)';
    img1.style.transition = 'transform 0.3s ease';
});
grid1.addEventListener('mouseleave', () => {
    grid1.style.backgroundColor = '';
    grid2.style.backgroundColor = '';
    img1.style.transform = '';
});


grid2.addEventListener('mouseenter', () => {
    grid2.style.backgroundColor = '#5bc86e';
    img1.style.transform = 'scale(1.05)';
    img1.style.transition = 'transform 0.3s ease';
});
grid2.addEventListener('mouseleave', () => {
    grid2.style.backgroundColor = '';
    img1.style.transform = '';
});

// Add hover effects for grid3 and grid4
grid3.addEventListener('mouseenter', () => {
    grid3.style.backgroundColor = '#5bc86e';
    grid4.style.backgroundColor = '#5bc86e';
    img4.style.transform = 'scale(1.05)';
    img4.style.transition = 'transform 0.3s ease';
});
grid3.addEventListener('mouseleave', () => {
    grid3.style.backgroundColor = '';
    grid4.style.backgroundColor = '';
    img4.style.transform = '';
});

// Add hover effects for grid4
grid4.addEventListener('mouseenter', () => {
    grid4.style.backgroundColor = '#5bc86e';
    grid3.style.backgroundColor = '#5bc86e';
    img4.style.transform = 'scale(1.05)';
    img4.style.transition = 'transform 0.3s ease';
});
grid4.addEventListener('mouseleave', () => {
    grid4.style.backgroundColor = '';
    grid3.style.backgroundColor = '';
    img4.style.transform = '';
});
grid4.addEventListener('mouseenter', () => {
    // Set color when hovering over grid4
    grid3H3.style.color = '#f6f6f6';
    grid3H2.style.color = '#333332';
    grid3P.style.color = '#f6f6f6';
    grid3H3.style.borderLeft = '2px solid #333332';
});

grid4.addEventListener('mouseleave', () => {
    // Reset color when mouse leaves grid4
    grid3H3.style.color = '';
    grid3H2.style.color = '';
    grid3P.style.color = '';
    grid3H3.style.borderLeft = '';
});

grid3.addEventListener('mouseenter', () => {
    // Set color when hovering over grid3
    grid3H3.style.color = '#f6f6f6';
    grid3H2.style.color = '#333332';
    grid3P.style.color = '#f6f6f6';
    grid3H3.style.borderLeft = '2px solid #333332';
});

grid3.addEventListener('mouseleave', () => {
    // Reset color when mouse leaves grid3
    grid3H3.style.color = '';
    grid3H2.style.color = '';
    grid3P.style.color = '';
    grid3H3.style.borderLeft = '';
});

grid5.addEventListener('mouseenter', () => {
    grid5.style.backgroundColor = '#5bc86e';
    grid6.style.backgroundColor = '#5bc86e';
    img5.style.transform = 'scale(1.05)';
    img5.style.transition = 'transform 0.3s ease';
});
grid5.addEventListener('mouseleave', () => {
    grid5.style.backgroundColor = '';
    grid6.style.backgroundColor = '';
    img5.style.transform = '';
});

// Add hover effects for grid2
grid6.addEventListener('mouseenter', () => {
    grid6.style.backgroundColor = '#5bc86e';
    img5.style.transform = 'scale(1.05)';
    img5.style.transition = 'transform 0.3s ease';
});
grid6.addEventListener('mouseleave', () => {
    grid6.style.backgroundColor = '';
    img5.style.transform = '';
});