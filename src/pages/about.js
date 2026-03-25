import { createQuoteSection, createListSection } from "./section.js";

function createAbout() {
    const container = document.createElement('div');

    container.appendChild(createQuoteSection(
        'About Us',
        'Nestled in the heart of the city, Ember & Oak is a modern grill house celebrating the art of live-fire cooking. Every dish is crafted from locally sourced ingredients and kissed by wood smoke — because great food deserves a story.',
    ));
    container.appendChild(createListSection(
        'Opening Hours',
        'Mon - Thu: 12:00 - 22:00', 
        'Fri - Sat: 12:00 - 23:30', 
        'Sunday: 13:00 - 21:00',
    ));

    return container;
}

export { createAbout }