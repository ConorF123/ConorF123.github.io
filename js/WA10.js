const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['danny_devito.jpg', 'chris.jpg', 'favorite-1_th.jpg', 'favorite-2_th.jpg', 'favorite-3_th.jpg'];

const alts = {'danny_devito.jpg':'Danny boi','chris.jpg':'Chrissy boi','favorite-1_th.jpg':'Bird in tree','favorite-2_th.jpg':'Blue bird','favorite-3_th.jpg':'White bird'}

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `/img/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }

btn.addEventListener('click', () => {
const btnClass = btn.getAttribute('class');
if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
}
else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}
});