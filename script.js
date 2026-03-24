const leftColumnData = [
    {
        id: "flatbreads", title_en: "Flatbreads", title_ar: "بالعجين",
        items: [
            { name_en: "FAWDA", name_ar: "فوضى", price: "9.0" },
            { name_en: "MIGHTY KAFTA", name_ar: "مايتي كفتة", price: "7.5" }
        ]
    },
    {
        id: "fries", title_en: "Fries", title_ar: "بطاطا",
        items: [
            { name_en: "Regular Box", name_ar: "علبة", price: "2.5" },
            { name_en: "Medium Box", name_ar: "علبة وسط", price: "5.0" },
            { name_en: "Large Box", name_ar: "جاط بطاطا", price: "10.0" }
        ]
    },
    {
        id: "1kg_on_demand", title_en: "1KG / On Demand", title_ar: "كيلو / حسب الطلب",
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
        id: "hot_beverages", title_en: "Hot Beverages", title_ar: "مشروبات ساخنة",
        items: [
            { name_en: "Nescafe", name_ar: "نيسكافيه", price: "2.0" },
            { name_en: "Coffee", name_ar: "قهوة", price: "1.0" },
            { name_en: "Tea", name_ar: "شاي", price: "2.0" },
            { name_en: "Hot Chocolate", name_ar: "شكولاته ساخنة", price: "2.0" }
        ]
    }
];

const rightColumnData = [
    {
        id: "sandwiches", title_en: "Sanwiches", title_ar: "سندويشات",
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
    },
    {
        id: "side_dishes", title_en: "Side Dishes", title_ar: "أطباق جانبية",
        items: [
            { name_en: "Eres Kebbeh", name_ar: "قرص دهن", price: "5.0" },
            { name_en: "Tabbouleh", name_ar: "تبولة", price: "7.0" },
            { name_en: "Castaletta", name_ar: "کاستالیتا", price: "18.0" }
        ]
    },
    {
        id: "cold_beverages", title_en: "Cold Beverages", title_ar: "مشروبات باردة",
        items: [
            { name_en: "Beer", name_ar: "بيرة", price: "3.0" },
            { name_en: "Soft Drink", name_ar: "مرطبات", price: "1.5" },
            { name_en: "Water", name_ar: "ماء", price: "0.5" },
            { name_en: "Sparkling Water", name_ar: "بیریه", price: "2.5" }
        ]
    },
    {
        id: "alcoholic_drinks", title_en: "Alcoholic Drinks", title_ar: "مشروبات روحية",
        items: [
            { name_en: "Vodka", name_ar: "فودكا", price: "5.0 / 45.0" },
            { name_en: "Whiskey", name_ar: "ويسكي", price: "6.0 / 60.0" },
            { name_en: "Gin", name_ar: "جين", price: "6.0 / 60.0" },
            { name_en: "Wine", name_ar: "نبيذ", price: "15.0 / X" },
            { name_en: "Arak", name_ar: "عرق", price: "15.0 / X" }
        ]
    },
    {
        id: "shisha", title_en: "Shisha", title_ar: "أركيلة",
        items: [
            { name_en: "Shisha", name_ar: "أركيلة", price: "6.0" }
        ]
    }
];

let currentLang = 'en';
const leftContainer = document.getElementById('left-container');
const rightContainer = document.getElementById('right-container');
const langToggleBtn = document.getElementById('lang-toggle');

function renderItems(items, container) {
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'item-name';
        nameSpan.textContent = currentLang === 'en' ? item.name_en : item.name_ar;

        // The dotted lines element
        const dotSpan = document.createElement('span');
        dotSpan.className = 'item-dots';

        const priceSpan = document.createElement('span');
        priceSpan.className = 'item-price';

        if (item.price.includes('/')) {
            const parts = item.price.split('/').map(p => p.trim());
            const p1 = parts[0].toLowerCase() === 'x' ? 'x' : `$${parts[0]}`;
            const p2 = parts[1].toLowerCase() === 'x' ? 'x' : `${parts[1]}`;
            
            priceSpan.classList.add('split-price');
            priceSpan.innerHTML = `
                <span class="price-left">${p1}</span>
                <span class="price-sep">/</span>
                <span class="price-right">${p2}</span>
            `;
        } else {
            priceSpan.textContent = item.price.toUpperCase() === 'X' ? 'X' : `$${item.price}`;
        }

        div.appendChild(nameSpan);
        div.appendChild(dotSpan);
        div.appendChild(priceSpan);
        container.appendChild(div);
    });
}

function renderCategoryList(dataList, container) {
    container.innerHTML = '';

    dataList.forEach(category => {
        const catDiv = document.createElement('div');
        catDiv.className = 'category-block';

        const title = document.createElement('h2');
        title.className = 'main-category-title';
        let titleInner = `<span class="title-text">${currentLang === 'en' ? category.title_en : category.title_ar}</span>`;
        if (category.id === 'alcoholic_drinks') {
            title.classList.add('flex-title');
            titleInner += `
                <div class="split-price category-right-label" style="font-size: 0.95rem; font-family: var(--font-item); font-weight: 700; opacity: 0.8; margin-bottom: 2px;">
                    <span class="price-left" style="border:none;">GLS</span>
                    <span class="price-sep" style="border:none;">/</span>
                    <span class="price-right" style="border:none;">BTL</span>
                </div>
            `;
        }
        title.innerHTML = titleInner;
        catDiv.appendChild(title);

        if (category.subcategories) {
            category.subcategories.forEach(sub => {
                const subTitle = document.createElement('h3');
                subTitle.className = 'sub-category-title';
                subTitle.innerHTML = `<span>${currentLang === 'en' ? sub.title_en : sub.title_ar}</span>`;
                catDiv.appendChild(subTitle);
                renderItems(sub.items, catDiv);
            });
        } else {
            renderItems(category.items, catDiv);
        }

        container.appendChild(catDiv);
    });
}

function renderFullMenu() {
    renderCategoryList(leftColumnData, leftContainer);
    renderCategoryList(rightColumnData, rightContainer);
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

renderFullMenu();