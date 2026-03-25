import Hero from '../images/ember_and_oak_logo.svg'
import { createImageSection } from './section.js';

function createHero() {
    const img = new Image();
    img.src = Hero;

    return createImageSection(img);
}

export { createHero }