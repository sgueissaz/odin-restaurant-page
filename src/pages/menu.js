import { createListOfListSection } from "./section.js";


function createMenu() {
    return createListOfListSection(
        'Menu',
        ['Oak-Smoked Ribeye', '28-day aged', 'Served with roasted bone marrow butter'],
        ['Charred Beet & Walnut Salad', 'Whipped goat cheese', 'Honey-thyme dressing'],
        ['Ember Flatbread', 'Wild mushroom', 'Truffle oil', 'Fresh thyme'],
        ['Salted Caramel Lava Cake', 'Vanilla bean ice cream', 'Candied pecans'],
    );
}

export { createMenu }