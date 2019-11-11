const productDB = {
    0: {
        name: 'Intel Core i7-9700K',
        img_src: 'https://placehold.it/250',
        img_alt: 'Placeholder 250x250px',
        price: 414,
        category: 'CPU',
        sku: 1234,
    },
    1: {
        name: 'Some other CPU',
        img_src: 'https://placehold.it/500',
        img_alt: 'Placeholder 500x500px',
        price: 500.99,
        category: 'CPU',
        sku: 53428,
    },
    2: {
        name: 'A graphics card',
        img_src: 'https://placehold.it/500',
        img_alt: 'Placeholder 500x500px',
        price: 600.99,
        category: 'GFX',
        sku: 213804,
    },
    3: {
        name: 'A different graphics card',
        img_src: 'https://placehold.it/500',
        img_alt: 'Placeholder 500x500px',
        price: 399.99,
        category: 'GFX',
        sku: 1337
    }
};

export function getList() {
    return productDB;
}

export function searchDB(search) {
    let results = {};
    for (let key of Object.keys(productDB)) {
        let item = productDB[key];
        if (item.name.toUpperCase().includes(search.toUpperCase())) {
            //results.push({key: item});
            results[key] = item;
        }
    }
    return results;
}

export function addDB(product) {
    if (validate(product)) {
        productDB[Object.keys(productDB).length + 1] = product;
        return true;
    } else {
        return false;
    }
}

function validate(product) {
    return true;
}

export {productDB};