const productsGrid = document.querySelector(".products");
const CURRENCIES = {
    "USD" : "USD",
    "UAH" : "UAH"
};

const furniture = [
    {
        type: 'desk',
        price: 27.87
    },
    {
        type: 'closet',
        price: 187.32
    },
    {
        type: 'chair',
        price: 79.29
    },
    {
        type: 'bed',
        price: 239.99
    }
];

const devices = [
    {
        type: 'desktop',
        price: [272, 769]
    },
    {
        type: 'laptop',
        price: [499, 1800]
    },
    {
        type: 'smartphone',
        price: [100, 800]
    },
    {
        type: 'tablet',
        price: [185, 1000]
    },
    {
        type: 'console',
        price: 889
    }
];

const appliances = [
    {
        type: 'oven',
        price: 780
    },
    {
        type: 'microwave',
        price: [50, 1400]
    },
    {
        type: 'mixer',
        price: 215.17
    }
];

function Product (category, type, price) {
    this.category = category;
    this.type = type;
    this.price = price;

    const typeLine = type.charAt(0).toUpperCase() + type.slice(1);
    const priceLine = 
        price.length !== undefined ? 
        price.join(" - ") + " " + CURRENCIES.USD : 
        price + " " + CURRENCIES.USD;

    this.render = () => {
        return (
        `<div class="products__item product__item--${category.toLowerCase()}">
            <div class="products__thumb">
                <img src="images/${category.toLowerCase()}/${type}.svg" alt="${typeLine} illustration" />
            </div>
            <div class="products__details">
                <div class="products__type"><span class="products__category">${category}/</span> ${typeLine}</div>
                <div class="products__price">${priceLine}</div>
            </div>
        </div>`
        );
    };
};


const products = (products, category) => {
    for(let product of products) {
        const {type, price, render} = product;
        const addProduct = new Product(category, type, price);
        productsGrid.innerHTML += addProduct.render();
    };
};

products(furniture, "Furniture");

products(devices, "Devices");

products(appliances, "Appliances");


const product = new Product("furniture", "bed", 239.99);
console.log(product.category); // furniture
console.log(product.type); // bed
console.log(product.price); // 239.99
console.log(product.render()); 