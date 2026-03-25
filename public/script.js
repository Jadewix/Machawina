let currentLang = 'ar'; // Default set to Arabic based on your friend's setup
let menuRows = []; // Starts empty, filled by SQLite

const container = document.getElementById('menu-container');
const langToggleContainer = document.getElementById('lang-toggle');
const arOption = document.getElementById('lang-ar');
const enOption = document.getElementById('lang-en');

// 1. Fetch from Database
fetch('http://localhost:3000/api/menu')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => {
        menuRows = data;
        renderFullMenu();
    })
    .catch(error => {
        console.error('Error loading menu:', error);
        container.innerHTML = `<h3 style="color: red; text-align: center; padding: 40px;">Error loading menu data. Is your Node.js server running?</h3>`;
    });

// --- RENDER FUNCTIONS (Integrated from your friend's code) ---

function renderRegularItem(item, parentDiv) {
    const div = document.createElement('div');
    div.className = 'menu-item';

    const nameSpan = document.createElement('span');
    nameSpan.className = 'item-name';
    nameSpan.textContent = currentLang === 'en' ? item.name_en : item.name_ar;

    const dotSpan = document.createElement('span');
    dotSpan.className = 'item-dots';

    const priceSpan = document.createElement('span');
    priceSpan.className = 'item-price';
    priceSpan.textContent = item.price.includes('/') ? `$${item.price}` : `$${item.price}`;

    div.appendChild(nameSpan);
    div.appendChild(dotSpan);
    div.appendChild(priceSpan);
    parentDiv.appendChild(div);
}

function renderColumnedItem(item, parentDiv) {
    const div = document.createElement('div');
    div.className = 'item-with-cols';

    const nameSpan = document.createElement('span');
    nameSpan.className = 'item-name';
    nameSpan.textContent = currentLang === 'en' ? item.name_en : item.name_ar;

    const dotSpan = document.createElement('span');
    dotSpan.className = 'item-dots';

    const pricesDiv = document.createElement('div');
    pricesDiv.className = 'prices';

    const glassSpan = document.createElement('span');
    glassSpan.className = 'item-price';
    glassSpan.textContent = `$${item.price.gls}`;

    const bottleSpan = document.createElement('span');
    bottleSpan.className = 'item-price';
    bottleSpan.textContent = `$${item.price.btl}`;

    pricesDiv.appendChild(glassSpan);
    pricesDiv.appendChild(bottleSpan);

    div.appendChild(nameSpan);
    div.appendChild(dotSpan);
    div.appendChild(pricesDiv);
    parentDiv.appendChild(div);
}

function renderCategoryItems(items, parentDiv, showColsFlag) {
    items.forEach(item => {
        if (showColsFlag && typeof item.price === 'object') {
            renderColumnedItem(item, parentDiv);
        } else {
            renderRegularItem(item, parentDiv);
        }
    });
}

function renderColumnBlocks(blocks, colDiv) {
    blocks.forEach(block => {
        if (block.type === 'logo') {
            const img = document.createElement('img');
            img.src = block.src;
            img.className = 'main-logo';
            img.alt = 'Machawina';
            colDiv.appendChild(img);
            return;
        }

        const catDiv = document.createElement('div');
        catDiv.className = 'category-block';

        const titleRow = document.createElement('div');
        titleRow.className = 'category-title-row';

        const title = document.createElement('h2');
        title.className = 'main-category-title';
        title.innerHTML = `<span>${currentLang === 'en' ? block.title_en : block.title_ar}</span>`;
        titleRow.appendChild(title);

        if (block.showCols) {
            const headerPrices = document.createElement('div');
            headerPrices.className = 'header-prices';

            const glsSpan = document.createElement('span');
            glsSpan.className = 'price-col';
            glsSpan.textContent = 'GLS';

            const btlSpan = document.createElement('span');
            btlSpan.className = 'price-col';
            btlSpan.textContent = 'BTL';

            headerPrices.appendChild(glsSpan);
            headerPrices.appendChild(btlSpan);
            titleRow.appendChild(headerPrices);
        }

        catDiv.appendChild(titleRow);

        if (block.banner_en) {
            const bannerDiv = document.createElement('div');
            bannerDiv.className = 'delivery-banner';
            bannerDiv.textContent = currentLang === 'en' ? block.banner_en : block.banner_ar;
            catDiv.appendChild(bannerDiv);
        }

        if (block.subcategories) {
            block.subcategories.forEach(sub => {
                const subTitle = document.createElement('h3');
                subTitle.className = 'sub-category-title';
                subTitle.innerHTML = `<span>${currentLang === 'en' ? sub.title_en : sub.title_ar}</span>`;
                catDiv.appendChild(subTitle);
                renderCategoryItems(sub.items, catDiv, block.showCols);
            });
        } else {
            renderCategoryItems(block.items, catDiv, block.showCols);
        }

        colDiv.appendChild(catDiv);
    });
}

function renderFullMenu() {
    container.innerHTML = '';

    menuRows.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'menu-row';
        if (row.class) rowDiv.classList.add(row.class);

        const leftCol = document.createElement('div');
        leftCol.className = 'column left-column';
        renderColumnBlocks(row.left, leftCol);

        const rightCol = document.createElement('div');
        rightCol.className = 'column right-column';
        renderColumnBlocks(row.right, rightCol);

        rowDiv.appendChild(leftCol);
        rowDiv.appendChild(rightCol);
        container.appendChild(rowDiv);
    });
}

langToggleContainer.addEventListener('click', () => {
    if (currentLang === 'en') {
        currentLang = 'ar';
        document.body.classList.add('rtl');
        arOption.classList.add('active');
        enOption.classList.remove('active');
    } else {
        currentLang = 'en';
        document.body.classList.remove('rtl');
        enOption.classList.add('active');
        arOption.classList.remove('active');
    }
    renderFullMenu();
});