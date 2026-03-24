// FULL MENU DATA
const menuRows = [
    {
        // ROW 1: Aligns Flatbreads/Fries against Sandwiches
        left: [
            { type: 'logo', src: 'Logo.png' },
            {
                type: 'category', id: "flatbreads", title_en: "Flatbreads", title_ar: "بالعجين",
                items: [
                    { name_en: "FAWDA", name_ar: "فوضى", price: "9.0" },
                    { name_en: "MIGHTY KAFTA", name_ar: "مايتي كفتة", price: "7.5" }
                ]
            },
            {
                type: 'category', id: "fries", title_en: "Fries", title_ar: "بطاطا",
                items: [
                    { name_en: "Regular Box", name_ar: "علبة", price: "2.5" },
                    { name_en: "Medium Box", name_ar: "علبة وسط", price: "5.0" },
                    { name_en: "Large Box", name_ar: "جاط بطاطا", price: "10.0" }
                ]
            }
        ],
        right: [
            {
                type: 'category', id: "sandwiches", title_en: "Sanwiches", title_ar: "سندويشات",
                subcategories: [
                    {
                        title_en: "CHICKEN", title_ar: "دجاج",
                        items: [
                            { name_en: "Tawouk", name_ar: "طاووق", price: "4.0" },
                            { name_en: "Chicken Syree", name_ar: "سیریه دجاح", price: "4.0" },
                            { name_en: "Chicken Shawarma", name_ar: "شاورما دجاج", price: "4.5" },
                            { name_en: "Chicken Liver", name_ar: "سودا دجاج", price: "4.0" },
                            { name_en: "Chicken Burger", name_ar: "برغر دجاج", price: "4.0" }
                        ]
                    },
                    {
                        title_en: "MEAT", title_ar: "لحم",
                        items: [
                            { name_en: "Lamb Sandwich", name_ar: "لحمة غنم", price: "5.0" },
                            { name_en: "Kafta", name_ar: "كفتة", price: "4.5" },
                            { name_en: "Orfali", name_ar: "اورفلي", price: "4.5" },
                            { name_en: "Turkish Kebab", name_ar: "کباب تركي", price: "4.5" },
                            { name_en: "HamBurger", name_ar: "برغر لحمة", price: "4.5" },
                            { name_en: "Beef Syree", name_ar: "سيريه لحمة", price: "4.5" },
                            { name_en: "Mqaneq", name_ar: "مقانق", price: "4.5" },
                            { name_en: "Sejok", name_ar: "سجق", price: "4.5" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        // ROW 2: Aligns 1KG and Side Dishes against Alcoholic and Hot Beverages
        left: [
            {
                type: 'category', id: "1kg_on_demand", title_en: "1KG / On Demand", title_ar: "كيلو / حسب الطلب",
                banner_en: "DELIVERY / TAKEAWAY ONLY", banner_ar: "خدمة التوصيل والطلبات الخارجية فقط",
                items: [
                    { name_en: "Tawouk", name_ar: "طاووق", price: "29.0" },
                    { name_en: "Grilled Chicken", name_ar: "فروج مشوي", price: "15.0" },
                    { name_en: "Chicken Syree", name_ar: "سیریه دجاج", price: "29.0" },
                    { name_en: "Beef Syree", name_ar: "سيريه لحمة", price: "33.0" },
                    { name_en: "Lamb Meat", name_ar: "لحمة غنم", price: "42.0" },
                    { name_en: "Kafta", name_ar: "كفتة", price: "33.0" },
                    { name_en: "Mqaneq", name_ar: "مقانق", price: "33.0" }
                ]
            },
            {
                type: 'category', id: "side_dishes", title_en: "Side Dishes", title_ar: "أطباق جانبية",
                items: [
                    { name_en: "Eres Kebbeh", name_ar: "قرص دهن", price: "5.0" },
                    { name_en: "Tabbouleh", name_ar: "تبولة", price: "7.0" },
                    { name_en: "Castaletta", name_ar: "کاستالیتا", price: "18.0" }
                ]
            }
        ],
        right: [
            {
                type: 'category', id: "alcocolic_drinks", title_en: "Alcoholic Drinks", title_ar: "مشروبات روحية",
                showCols: "GLS/BTL",
                items: [
                    { name_en: "Vodka", name_ar: "فودكا", price: { gls: "5", btl: "45" } },
                    { name_en: "Whiskey", name_ar: "ويسكي", price: { gls: "6", btl: "60" } },
                    { name_en: "Gin", name_ar: "جين", price: { gls: "6", btl: "60" } },
                    { name_en: "Wine", name_ar: "نبيذ", price: { gls: "X", btl: "15" } },
                    { name_en: "Arak", name_ar: "عرق", price: { gls: "X", btl: "15" } }
                ]
            },
            {
                type: 'category', id: "hot_beverages", title_en: "Hot Beverages", title_ar: "مشروبات ساخنة",
                items: [
                    { name_en: "Nescafe", name_ar: "نيسكافيه", price: "2.0" },
                    { name_en: "Coffee", name_ar: "قهوة", price: "1.0" },
                    { name_en: "Tea", name_ar: "شاي", price: "2.0" },
                    { name_en: "Hot Chocolate", name_ar: "شكولاته ساخنة", price: "2.0" }
                ]
            }
        ]
    },
    {
        // ROW 3: Dedicated row specifically to lock Cold Beverages and Shisha in alignment
        left: [
            {
                type: 'category', id: "cold_beverages", title_en: "Cold Beverages", title_ar: "مشروبات باردة",
                items: [
                    { name_en: "Beer", name_ar: "بيرة", price: "3.0" },
                    { name_en: "Soft Drink", name_ar: "مرطبات", price: "1.5" },
                    { name_en: "Water", name_ar: "ماء", price: "0.5" },
                    { name_en: "Sparkling Water", name_ar: "بیریه", price: "2.5" }
                ]
            }
        ],
        right: [
            {
                type: 'category', id: "shisha", title_en: "Shisha", title_ar: "أركيلة",
                items: [
                    { name_en: "Shisha", name_ar: "أركيلة", price: "6.0" }
                ]
            }
        ]
    }
];

let currentLang = 'en';
const container = document.getElementById('menu-container');
const langToggleBtn = document.getElementById('lang-toggle');

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

        const title = document.createElement('h2');
        title.className = 'main-category-title';
        title.innerHTML = `<span>${currentLang === 'en' ? block.title_en : block.title_ar}</span>`;
        catDiv.appendChild(title);

        if (block.banner_en) {
            const bannerDiv = document.createElement('div');
            bannerDiv.className = 'delivery-banner';
            bannerDiv.textContent = currentLang === 'en' ? block.banner_en : block.banner_ar;
            catDiv.appendChild(bannerDiv);
        }

        if (block.showCols) {
            const headerRow = document.createElement('div');
            headerRow.className = 'col-header-row';
            headerRow.innerHTML = `<span class="header-text">${currentLang === 'en' ? '' : ''}</span><span class="price-col">${currentLang === 'en' ? 'GLS' : 'GLS'}</span><span class="price-col">${currentLang === 'en' ? 'BTL' : 'BTL'}</span>`;
            catDiv.appendChild(headerRow);
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

langToggleBtn.addEventListener('click', () => {
    if (currentLang === 'en') {
        currentLang = 'ar';
        langToggleBtn.textContent = 'English';
        document.body.classList.add('rtl');
    } else {
        currentLang = 'en';
        langToggleBtn.textContent = 'عربي';
        document.body.classList.remove('rtl');
    }
    renderFullMenu();
});

// Initialize Menu
renderFullMenu();