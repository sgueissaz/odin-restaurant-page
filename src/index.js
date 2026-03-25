import './style.css'
import './template.html'

import { createHero } from './pages/hero.js';
import { createMenu } from './pages/menu.js';
import { createAbout } from './pages/about.js';
import { createContact } from './pages/contact.js';

const header = document.querySelector('header');
const content = document.getElementById('content');

header.addEventListener('click', e => {
    const id = e.target.id;
    if (id === undefined || id === '') {
        return;
    }

    content.innerHTML = "";

    switch(id) {
        case 'logo':
        case 'home-btn':
            content.appendChild(createHero());
            break;
        case 'menu-btn':
            content.appendChild(createMenu());
            break;
        case 'about-btn':
            content.appendChild(createAbout());
            break;
        case 'contact-btn':
            content.appendChild(createContact());
            break;
    }
})

window.addEventListener('resize', () => {
  document.documentElement.style.setProperty(
    '--header-height',
    header.offsetHeight + 'px'
  );
});

document.documentElement.style.setProperty(
  '--header-height',
  header.offsetHeight + 'px'
);

content.appendChild(createHero());