import { createListSection } from "./section.js";

function createContact() {
    return createListSection(
        'Contact Us',
        'Ember & Oak', 
        '14 Ashwood Lane, Maplecrest District', 
        '+1 (555) 304-8821',
        'hello@emberandoak.com',
    );
}

export { createContact }