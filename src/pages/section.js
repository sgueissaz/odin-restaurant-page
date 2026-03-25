function createQuoteSection(title, quote) {
    const section = document.createElement('section');

    const h1 = document.createElement('h1');
    h1.textContent = title;
    section.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = quote;
    section.appendChild(p);

    return section;
}

function createListSection(title, ...items) {
    const section = document.createElement('section');
    
    const h1 = document.createElement('h1');
    h1.textContent = title;
    section.appendChild(h1);

    const ul = document.createElement('ul');
    items.forEach(o => {
        const li = document.createElement('li');
        li.textContent = o;
        ul.appendChild(li);
    })
    section.appendChild(ul);

    return section;
}

function createListItem(title, ...items) {
    const container = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = title;
    container.appendChild(h2);

    items.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        container.appendChild(p);
    })

    return container;
}

function createListOfListSection(title, ...items) {
    const section = document.createElement('section');

    const h1 = document.createElement('h1');
    h1.textContent = title;
    section.appendChild(h1);

    items.forEach(list => {
        section.appendChild(createListItem(...list));
    });

    return section;
}

function createImageSection(img) {
    const section = document.createElement('section');
    section.appendChild(img);

    return section;
}


export { createQuoteSection, createListSection, createListOfListSection, createImageSection }