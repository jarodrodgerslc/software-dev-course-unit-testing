function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    else return  price - (price*discountRate);
    
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    else return products.filter(callback);
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    else return inventory.sort((a, b) => a.[key] - b.[key]);
}

console.log(calculateDiscount(100, .4))

module.exports = {calculateDiscount, filterProducts, sortInventory};

